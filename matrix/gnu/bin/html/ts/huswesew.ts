/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 * https://www.google.com/policies/terms/
 * https://www.apache.org/licenses/LICENSE-2.0
 * This file is part of the Google Matrix project.
 * The project is licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * https://www.apache.org/licenses/LICENSE-2.0
 * https://www.google.com/policies/terms/
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * This file is generated by the Matrix project. Do not edit it manually.
 * This file is generated from the huswesew.ts template.
 */


export const huswesew = {
    "name": "Huswesew",
    "description": "A Huswesew is a type of graph that is used to represent the relationships between different elements in a system. It is a directed graph, meaning that the edges have a direction, and it is used to model the flow of information or resources between different nodes in the system.",
    "type": "graph",
    "properties": {
        "nodes": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "id": {
                        "type": "string",
                        "description": "The unique identifier for the node."
                    },
                    "label": {
                        "type": "string",
                        "description": "The label for the node."
                    },
                    "type": {
                        "type": "string",
                        "description": "The type of the node."
                    },
                    "properties": {
                        "type": "object",
                        "description": "The properties of the node.",
                        "additionalProperties": {
                            "type": "string"
                        }
                    }
                },
                "required": ["id", "label", "type"],
                "additionalProperties": false
            },
            "description": "The list of nodes in the Huswesew."
        },
        "edges": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "source": {
                        "type": "string",
                        "description": "The unique identifier for the source node."
                    },
                    "target": {
                        "type": "string",
                        "description": "The unique identifier for the target node."
                    },
                    "label": {
                        "type": "string",
                        "description": "The label for the edge."
                    },
                    "type": {
                        "type": "string",
                        "description": "The type of the edge."
                    },
                    "properties": {
                        "type": "object",
                        "description": "The properties of the edge.",
                        "additionalProperties": {
                            "type": "string"
                        }
                    }
                },
                "required": ["source", "target", "label", "type"],
                "additionalProperties": false
            },
            "description": "The list of edges in the Huswesew."
        },
        "properties": {
            "type": "object",
            "description": "The properties of the Huswesew.",
            "additionalProperties": {
                "type": "string"
            }
        }
    },
    "required": ["nodes", "edges"],
    "additionalProperties": false,
    "examples": [
        {
            "nodes": [
                {
                    "id": "1",
                    "label": "Node 1",
                    "type": "Type A",
                    "properties": {
                        "property1": "value1",
                        "property2": "value2"
                    }
                },
                {
                    "id": "2",
                    "label": "Node 2",
                    "type": "Type B",
                    "properties": {
                        "property1": "value1",
                        "property2": "value2"
                    }
                }
            ],
            "edges": [
                {
                    "source": "1",
                    "target": "2",
                    "label": "Edge 1",
                    "type": "Type A",
                    "properties": {
                        "property1": "value1",
                        "property2": "value2"
                    }
                }
            ],
            "properties": {
                "property1": "value1",
                "property2": "value2"
            },
           "examples": [
               {
                   "source": "1",
                   "target": "2",
                   "label": "Edge 1",
                   "type": "Type A",
                   "properties": {
                       "property1": "value1",
                       "property2": "value2"
                   }
               }
           ]
        }
    ]
};
export default huswesew;
export type Huswesew = typeof huswesew;
export type HuswesewNode = {
    id: string;
    label: string;
    type: string;
    properties: {
        [key: string]: string;
    };
};
export type HuswesewEdge = {
    source: string;
    target: string;
    label: string;
    type: string;
    properties: {
        [key: string]: string;
    };
};
export type HuswesewProperties = {
    [key: string]: string;
};
export type HuswesewGraph = {
    nodes: HuswesewNode[];
    edges: HuswesewEdge[];
    properties: HuswesewProperties;
};
export type HuswesewNodeProperties = {
    [key: string]: string;
};
export type HuswesewEdgeProperties = {
    [key: string]: string;
};
export type HuswesewGraphProperties = {
    [key: string]: string;
};
export type HuswesewNodeType = string;
export type HuswesewEdgeType = string;
export type HuswesewNodeLabel = string;
export type HuswesewEdgeLabel = string;
export type HuswesewNodeId = string;
export type HuswesewEdgeSource = string;
export type HuswesewEdgeTarget = string;
export type HuswesewNodeIdType = string;
export type HuswesewEdgeSourceType = string;
export type HuswesewEdgeTargetType = string;
export type HuswesewNodeLabelType = string;
export type HuswesewEdgeLabelType = string;
export type HuswesewNodePropertiesType = {
    [key: string]: string;
};
export type HuswesewEdgePropertiesType = {
    [key: string]: string;
};
