import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/primeng';
import { Message, MenuItem } from "primeng/components/common/api";
import { NodeService } from "../node.service";
import { UserActivity } from "../user_activity";
@Component({
  selector: 'rmt-resourceinfo',
  templateUrl: './resourceinfo.component.html',
  styleUrls: ['./resourceinfo.component.css']
})
export class ResourceinfoComponent implements OnInit {

msgs: Message[];

    files1: TreeNode[];

    files2: TreeNode[];

    files3: TreeNode[];

    files4: TreeNode[];

    files5: TreeNode[];

    files6: TreeNode[];

    lazyFiles: TreeNode[];

    selectedFile: TreeNode;

    selectedFile2: TreeNode;

    selectedFiles: TreeNode[];

    selectedFiles2: TreeNode[];

    items: MenuItem[];

    weekHeaders:any[];

    userActivityInfo: UserActivity;

    constructor(private nodeService: NodeService) { }

    ngOnInit() {
        this.nodeService.getFilesystem().then(files => this.files1 = files);
        this.nodeService.getFilesystem().then(files =>{
            this.files2 = files;
            this.weekHeaders = this.files2[0].data.addressList.map(x=>x.day);
            console.log(this.files2);
          }
         );
        this.nodeService.getFilesystem().then(files => this.files3 = files);
        this.nodeService.getFilesystem().then(files => this.files4 = files);
        this.nodeService.getFilesystem().then(files => this.files5 = files);
        this.nodeService.getFilesystem().then(files => this.files6 = files);
        //this.nodeService.getLazyFilesystem().then(files => this.lazyFiles = files);

        this.items = [
            {label: 'View', icon: 'fa-search', command: (event) => this.viewNode(this.selectedFile2)},
            {label: 'Delete', icon: 'fa-close', command: (event) => this.deleteNode(this.selectedFile2)}
        ];

    }
    nodeSelect(event) {
        this.msgs = [];
        //console.log(event.node.data.addressList);
        let myaddre = event.node.data.addressList.map(x=>x.activityList);
        //console.log(myaddre);
        let newmyaddre = myaddre.map(x=>{
            console.log(x);
            return (x.map(y=>y.activityname))
        });
        console.log(newmyaddre);

        let finalResult =newmyaddre
                                    // flatten to [ "1", "2", "1", "3" ]
                                    .reduce((prev, curr) => prev.concat(curr), [])

                                    // filter unique [ "1", "2", "3" ]
                                    .filter((item, i, arr) => arr.indexOf(item) === i);

        console.log(finalResult);
        //this.userActivityInfo = event.node.data
        this.msgs.push({severity: 'info', summary: 'Node Selected', detail: event.node.data.name});
    }

    nodeUnselect(event) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node Unselected', detail: event.node.data.name});
    }

    nodeExpand(event) {
        // if(event.node) {
        //     //in a real application, make a call to a remote url to load children of the current node and add the new nodes as children
        //     this.nodeService.getLazyFilesystem().then(nodes => event.node.children = nodes);
        // }
        return null;
    }

    viewNode(node: TreeNode) {
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node Selected', detail: node.data.name});
    }

    deleteNode(node: TreeNode) {
        node.parent.children = node.parent.children.filter( n => n.data !== node.data);
        this.msgs = [];
        this.msgs.push({severity: 'info', summary: 'Node Deleted', detail: node.data.name});
    }
}
