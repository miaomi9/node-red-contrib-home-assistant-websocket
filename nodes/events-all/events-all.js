const EventsNode = require('../../lib/events-node');

module.exports = function(RED) {
    const nodeOptions = {
        config: {
            event_type: {}
        }
    };

    class ServerEventsNode extends EventsNode {
        constructor(nodeDefinition) {
            super(nodeDefinition, RED, nodeOptions);
            this.addEventClientListener({
                event: 'ha_events:' + (this.nodeConfig.event_type || 'all'),
                handler: this.onHaEventsAll.bind(this)
            });
        }

        onHaEventsAll(evt) {
            this.send({
                event_type: evt.event_type,
                topic: evt.event_type,
                payload: evt
            });
            this.setStatusSuccess(evt.event_type);
        }

        clientEvent(type, data) {
            this.send({
                event_type: 'home_assistant_client',
                topic: `home_assistant_client:${type}`,
                payload: type,
                data: data
            });
        }

        onHaEventsClose() {
            super.onHaEventsClose();
            this.clientEvent('disconnected');
        }

        onHaEventsOpen() {
            super.onHaEventsOpen();
            this.clientEvent('connected');
        }

        onHaEventsConnecting() {
            super.onHaEventsConnecting();
            this.clientEvent('connecting');
        }

        onHaEventsError(err) {
            super.onHaEventsError(err);
            if (err) {
                this.clientEvent('error', err.message);
            }
        }
    }

    RED.nodes.registerType('server-events', ServerEventsNode);
};
