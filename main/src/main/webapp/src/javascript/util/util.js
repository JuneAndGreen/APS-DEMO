/**
 * 客服模块通用接口实现文件
 *
 * @Author  genify
 */
NEJ.define([
    'base/element',
    'base/event',
    'base/util'
],function(e,v,u,p){
    /**
     * 代理容器点击行为
     * @param  {Object} scope  - 作用域
     * @param  {Node}   parent - 容器节点
     * @param  {Object} config - 配置信息
     */
    p._$delegate = function(scope,parent,config){
        v._$addEvent(
            parent,'click',function(event){
                // check action
                var node = v._$getElement(event,'action');
                if (!node){
                    return;
                }
                // do action
                var action = e._$dataset(node,'action'),
                    func = (config||{})[action];
                if (u._$isFunction(func)){
                    func.call(scope||this,node,event);
                }
            }
        );
    };

    /**
     * 弹窗
     */
    p._$modal = function(){
        alert('目前暂未支持此功能');
    };

});