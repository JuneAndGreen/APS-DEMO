<@compress>
<!DOCTYPE html>
<html>
  <head>

    <#include "/common/macro.ftl">

    <title>页面入口</title>
    <meta charset="utf-8"/>
    <meta name="description" content="页面描述"/>
    <meta name="keywords" content="页面描述"/>

    <@css/>
    <link href="${csRoot}index.css" rel="stylesheet" type="text/css"/>
  </head>
  <body>

    <!-- Page Content Here -->

    <script src="${nejRoot}"></script>
    <script>
        NEJ.define([
            'pro/index'
        ],function(m){
            m._$$Module._$allocate();
        });
    </script>
  </body>
</html>
</@compress>