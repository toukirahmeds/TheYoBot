import { Injectable } from '@angular/core';
import * as _ from 'lodash';
declare var vis:any;


@Injectable()
export class VisTreeService{
	private nodes : any[] = [];
	private edges  : any[] = [];
	private data : any;

	private treeNetwork : any;

	constructor(){

	}

	getVisTreeOptions(){
		let options = {
				height : '100%',
				width :  '100%',
				edges : {
					arrows : {
						to : true
					}
				},
				nodes : {
					shape : 'box',
					size : 400,
					color : '#dee8f7'
				},
				interaction:{
					zoomView : true,
					hover: true,
					hoverConnectedEdges : true,
					dragView : true,
					dragNodes: true,
					navigationButtons : true
				},
				layout : {
					hierarchical : true
				}
		};
		return options;
	}


	addNode(id : string, label : string, parentId:any, edgeLabel : string){
		console.log(edgeLabel);
		this.nodes.push({
			id : id,
			label : label
		});

		this.edges.push({
			from : parentId,
			to : id,
			label : edgeLabel
		});
	}

	editNode(nodeId : number, label : string){
		this.nodes[nodeId - 1]["label"] = label;
		
	}

	deleteNode(nodeId : number){
		_.remove(this.nodes,(elem)=>{
			return elem.id === nodeId;
		});
		let deletedChilds = [];
		_.remove(this.edges,(elem)=>{
			if(elem.from === nodeId){
				deletedChilds.push(elem.to);
				return true;
			}else{
				return false;
			}
			// return elem.from === nodeId;
		});
		for(let i in deletedChilds){
			this.deleteNode(deletedChilds[i]);
		}
	}





	setNodes(nodes : any[]){
		this.nodes = nodes;
	}

	getNodes():any{
		return this.nodes;
	}

	setEdges(edges : any[]){
		this.edges = edges;
	}

	getEdges(){
		return this.edges;
	}

	getData(){
		return {
			'nodes' : new vis.DataSet(this.nodes),
			'edges' : new vis.DataSet(this.edges)
		};
	}




	setVisTreeClickEvent(callback){
		this.treeNetwork.on('click',callback);
	}


	initTree(container : any):any{
		this.treeNetwork = new vis.Network(container, this.getData(), this.getVisTreeOptions());
	}



}