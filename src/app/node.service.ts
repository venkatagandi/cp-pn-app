import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { TreeNode } from "primeng/components/common/api";

@Injectable()
export class NodeService {

    constructor(private http: Http) {}

    getFilesystem() {
        return this.http.get('../assets/showcase/resources/data/filesystem.json')
                    .toPromise()
                    .then(res => <TreeNode[]> res.json().data);
    }

}
