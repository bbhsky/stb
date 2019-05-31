import { observable } from "mobx";
import { IModel } from "stb-react";

export default class NavModel implements IModel {
    identCode: string | number;
    identCodeTo: string | number;
    setIndex: (index: number) => void;
    setFocus: (index: number) => void;

    @observable
    dataList: string[] = [
        '首页',
        '栏目',
        '专题'
    ];

    init({ }, memo: Index.IMemo) {
        return new Promise((resolve) => {
           resolve();
        });
    }
}