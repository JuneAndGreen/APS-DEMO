/*
 * ------------------------------------------
 * 标签缓存对象实现文件
 * @version  1.0
 * @author   genify(caijf@corp.netease.com)
 * ------------------------------------------
 */
NEJ.define([
    'base/klass',
    'base/util',
    'util/ajax/xdr',
    './cache.js'
],function(_k,_u,_j,_t,_p,_o,_f,_r){
    var _pro;
    /**
     * 标签缓存对象
     * @class   {_$$CacheTag}
     * @extends {_$$Cache}
     * @param   {Object}  可选配置参数，已处理参数列表如下所示
     */
    _p._$$CacheTag = _k._$klass();
    _pro = _p._$$CacheTag._$extend(_t._$$Cache);
    /**
     * 从服务器载入标签列表
     */
    _pro.__doLoadList = function(_options){
        var _key = _options.key,
            _callback = _options.onload;
        
        _j._$request('/api/tag/list',{
            method:'GET',
            type:'json',
            data:_u._$object2query(_options.data),
            onload:this.__cbListLoad._$bind(this,_options,_callback),
            onerror:this.__cbListLoad._$bind(this,_options,_callback,_o)
        });
    };
    
    return _p;
});
