import { NodeDef } from 'node-red';

import { RED } from '../../globals';
import { Status } from '../../helpers/status';
import { migrate } from '../../migrations';
import { BaseNode } from '../../types/nodes';
import FireEvent from './controller';

export default function fireEventNode(this: BaseNode, config: NodeDef) {
    RED.nodes.createNode(this, config);

    this.config = migrate(config);
    const status = new Status(this);
    this.controller = new FireEvent({
        node: this,
        config: this.config,
        RED,
        status,
    });
}
