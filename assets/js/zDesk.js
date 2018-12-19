const ACCESS_TOKEN = "YzXWHZv4IzDHt5R1JmNR5X0B7MbkKqxr";

const CHAT_API_URL = "https://chat-api.zopim.com/graphql/request";
const REQUEST_ID = {
    MESSAGE_SUBSCRIPTION: 1,
    UPDATE_AGENT_STATUS: 2,
    SEND_MESSAGE: 3,
    GET_DEPARTMENTS: 4,
    TRANSFER_TO_DEPARTMENT: 5
};
const SUBSCRIPTION_DATA_SIGNAL = "DATA";
const TYPE = {
    VISITOR: "Visitor"
};

const channelsToBeTransferred = [];
let messageSubscriptionId;

async function startAgentSession(access_token) {
    const query = `mutation($access_token: String!) {
        startAgentSession(access_token: $access_token) {
            websocket_url 
            session_id 
            client_id
        }
    }`;
    const variables = { access_token };

    console.log("[startAgentSession] Request sent");

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", CHAT_API_URL);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    return await xmlhttp.send(JSON.stringify({ query: query, variables: variables}));
}

async function init() {
    try {
        const startAgentSessionResp = (await startAgentSession(ACCESS_TOKEN)).body;

        if (startAgentSessionResp.errors && startAgentSessionResp.errors.length > 0) {
            console.log("[startAgentSession] Invalid access token");
        } else {
            console.log(
                "[startAgentSession] Successfully start agent session"
            );

            const {
                websocket_url,
                session_id,
                client_id
            } = startAgentSessionResp.data.startAgentSession;

            const webSocket = new WebSocket(websocket_url);

            webSocket.on("open", () => {
                console.log(`[WebSocket] Successfully connected to ${websocket_url}`);

                /*************************************************
                 * Periodic ping to prevent WebSocket connection *
                 * time out due to idle connection               *
                 *************************************************/
                setInterval(() => {
                    webSocket.send(
                    JSON.stringify({
                        sig: "PING",
                        payload: +new Date()
                    })
                    );
                }, 5000);

                /***********************
                 * Update agent status *
                 ***********************/
                const updateAgentStatusQuery = {
                    payload: {
                        query: `mutation { 
                        updateAgentStatus(status: ONLINE) { 
                            node {
                                id 
                            } 
                        }
                    }`
                    },
                    type: "request",
                    id: REQUEST_ID.UPDATE_AGENT_STATUS
                };
                webSocket.send(JSON.stringify(updateAgentStatusQuery));
                console.log("[updateAgentStatus] Request sent");

                /************************
                 * Message subscription *
                 ************************/
                const messageSubscriptionQuery = {
                    payload: {
                        query: `subscription { 
                        message { 
                            node { 
                                id 
                                content 
                                channel { 
                                    id 
                                } 
                                from { 
                                    __typename
                                    display_name
                                } 
                            } 
                        } 
                    }`
                    },
                    type: "request",
                    id: REQUEST_ID.MESSAGE_SUBSCRIPTION
                };
                webSocket.send(JSON.stringify(messageSubscriptionQuery));
                console.log("[message] Subscription request sent");
            });

            /************************************************
             * Listen to messages from WebSocket connection *
             ************************************************/
            webSocket.on("message", message => {
                const data = JSON.parse(message);

                // Listen to successful message subscription request
                if (data.id === REQUEST_ID.MESSAGE_SUBSCRIPTION) {
                    if (data.payload.errors && data.payload.errors.length > 0) {
                        console.log("[message] Failed to subscribe to message");
                    } else {
                        messageSubscriptionId = data.payload.data.subscription_id;
                        console.log("[message] Successfully subscribe to message");
                    }
                }

                // Listen to successful update agent status request
                if (data.id === REQUEST_ID.UPDATE_AGENT_STATUS) {
                    if (data.payload.errors && data.payload.errors.length > 0) {
                        console.log("[updateAgentStatus] Failed to update agent status");
                    } else {
                        console.log("[updateAgentStatus] Successfully update agent status");
                    }
                }

                if (data.id === REQUEST_ID.SEND_MESSAGE) {
                    if (data.payload.errors && data.payload.errors.length > 0) {
                        console.log("[sendMessage] Failed to send message to visitor");
                    } else {
                        console.log(
                            "[sendMessage] Successfully to send message to visitor"
                        );
                    }
                }

                if (data.id === REQUEST_ID.TRANSFER_TO_DEPARTMENT) {
                    if (data.payload.errors && data.payload.errors.length > 0) {
                        console.log("[transferToDepartment] Failed to transfer visitor to a department");
                    } else {
                        console.log(
                            "[transferToDepartment] Successfully to transfer visitor to a department"
                        );
                    }
                }

                if (data.id === REQUEST_ID.GET_DEPARTMENTS) {
                    const channelToBeTransferred = channelsToBeTransferred.pop();

                    if (data.payload.errors && data.payload.errors.length > 0) {
                        console.log("[getDepartments] Failed to get departments info");
                    } else {
                        console.log(
                            "[getDepartments] Successfully to get departments info"
                        );

                        const allDepartments = data.payload.data.departments.edges;
                        const onlineDepartments = allDepartments.filter(department => department.node.status === 'ONLINE');

                        if (onlineDepartments.length > 0) {
                            const pickRandomDepartment = Math.floor(Math.random() * onlineDepartments.length);
                            const onlineDepartment = onlineDepartments[pickRandomDepartment].node;

                            /********************************************************
                             * Notify visitor that they are going to be transferred *
                             ********************************************************/
                            const sendMessageQuery = {
                                payload: {
                                    query: `mutation { 
                                        sendMessage(
                                            channel_id: "${channelToBeTransferred}", 
                                            msg: "You are going to be transferred to ${onlineDepartment.name} department shortly"
                                        ) {
                                            success
                                        }
                                    }`
                                },
                                type: "request",
                                id: REQUEST_ID.SEND_MESSAGE
                            };

                            webSocket.send(JSON.stringify(sendMessageQuery));

                            /***********************************
                             *Transfer channel to a department *
                             ***********************************/
                            const transferToDepartmentQuery = {
                                payload: {
                                    query: `mutation {
                                        transferToDepartment(
                                            channel_id: "${channelToBeTransferred}", 
                                            department_id: "${onlineDepartment.id}") {
                                          success
                                        }
                                      }`
                                },
                                type: "request",
                                id: REQUEST_ID.TRANSFER_TO_DEPARTMENT
                            };

                            webSocket.send(JSON.stringify(transferToDepartmentQuery));
                        }
                        else {
                            /****************************************************
                             * Notify visitor that there is no online department*
                             ****************************************************/
                            const sendMessageQuery = {
                                payload: {
                                    query: `mutation { 
                                        sendMessage(
                                            channel_id: "${channelToBeTransferred}", 
                                            msg: "Sorry, there is no online department at the moment"
                                        ) {
                                            success
                                        }
                                    }`
                                },
                                type: "request",
                                id: REQUEST_ID.SEND_MESSAGE
                            };

                            webSocket.send(JSON.stringify(sendMessageQuery));
                        }
                    }
                }

                // Listen to chat messages from the visitor
                if (
                    data.sig === SUBSCRIPTION_DATA_SIGNAL &&
                    data.subscription_id === messageSubscriptionId &&
                    data.payload.data
                ) {
                    const chatMessage = data.payload.data.message.node;
                    const sender = chatMessage.from;

                    if (sender.__typename === TYPE.VISITOR) {
                        console.log(
                            `[message] Received: '${chatMessage.content}' from: '${
                            sender.display_name
                            }'`
                        );

                        if (chatMessage.content.toLowerCase().includes('transfer')) {
                            channelsToBeTransferred.push(chatMessage.channel.id);

                            /*****************************************************************
                             * Get current departments information for transferring the chat *
                             *****************************************************************/
                            const getDepartmentsQuery = {
                                payload: {
                                    query: `query {
                                        departments {
                                          edges {
                                            node {
                                              id
                                              name
                                              status
                                            }
                                          }
                                        }
                                      }`
                                },
                                type: "request",
                                id: REQUEST_ID.GET_DEPARTMENTS
                            };

                            webSocket.send(JSON.stringify(getDepartmentsQuery));
                        }
                        else {
                            /*************************
                             * Reply back to visitor *
                             *************************/
                            const sendMessageQuery = {
                                payload: {
                                    query: `mutation { 
                                        sendMessage(
                                            channel_id: "${chatMessage.channel.id}", 
                                            msg: "${chatMessage.content}"
                                        ) {
                                            success
                                        }
                                    }`
                                },
                                type: "request",
                                id: REQUEST_ID.SEND_MESSAGE
                            };

                            webSocket.send(JSON.stringify(sendMessageQuery));
                        }
                    }
                }
            });
        }
    } catch (e) {
        console.log("[startAgentSession] Request fail");
        console.log(e);
        console.log('ayo');
    }
}

init();