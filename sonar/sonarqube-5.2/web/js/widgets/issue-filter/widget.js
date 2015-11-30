Handlebars.registerPartial("_widget-issue-filter-limit",Handlebars.template({compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,r){var i=t.helperMissing,s=this.escapeExpression;return'<div class="note text-center spacer-top">'+s((t.tp||e&&e.tp||i).call(e,"max_results_reached",e!=null?e.maxResults:e,{name:"tp",hash:{},data:r}))+"</div>\n"},useData:!0})),Handlebars.registerPartial("_widget-issue-filter-total",Handlebars.template({1:function(e,t,n,r){return"+"},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,r){var i,s=t.helperMissing,o=this.escapeExpression,u='<tr>\n  <td>\n    <a href="'+o((t.issueFilterTotalLink||e&&e.issueFilterTotalLink||s).call(e,e!=null?e.parsedQuery:e,e!=null?e.displayMode:e,{name:"issueFilterTotalLink",hash:{},data:r}))+'"><strong>'+o((t.t||e&&e.t||s).call(e,"total",{name:"t",hash:{},data:r}))+'</strong></a>\n  </td>\n  <td class="text-right nowrap">\n    <strong>';return i=(t.notNull||e&&e.notNull||s).call(e,e!=null?e.periodDate:e,{name:"notNull",hash:{},fn:this.program(1,r),inverse:this.noop,data:r}),i!=null&&(u+=i),u+o((t.issueFilterValue||e&&e.issueFilterValue||s).call(e,e!=null?e.total:e,e!=null?e.displayMode:e,{name:"issueFilterValue",hash:{},data:r}))+'</strong>\n  </td>\n  <td class="barchart">\n    <div class="barchart" style="width: 100%;">\n      <div style="width: 100%;"></div>\n    </div>\n  </td>\n</tr>\n'},useData:!0})),this.Templates=this.Templates||{},this.Templates["widget-issue-filter-action-plans"]=Handlebars.template({1:function(e,t,n,r,i){var s,o=t.helperMissing,u=this.escapeExpression,a="    <tr>\n      <td>\n";return s=(t.eq||e&&e.eq||o).call(e,e!=null?e.val:e,"",{name:"eq",hash:{},fn:this.program(2,r,i),inverse:this.program(4,r,i),data:r}),s!=null&&(a+=s),a+='      </td>\n      <td class="text-right nowrap">\n        ',s=(t.notNull||e&&e.notNull||o).call(e,i[1]!=null?i[1].periodDate:i[1],{name:"notNull",hash:{},fn:this.program(6,r,i),inverse:this.noop,data:r}),s!=null&&(a+=s),a+u((t.issueFilterValue||e&&e.issueFilterValue||o).call(e,e!=null?e.count:e,i[1]!=null?i[1].displayMode:i[1],{name:"issueFilterValue",hash:{},data:r}))+'\n      </td>\n      <td class="barchart">\n        <div class="barchart" style="width: 100%;">\n          <div style="width: '+u((t.percent||e&&e.percent||o).call(e,e!=null?e.count:e,i[1]!=null?i[1].total:i[1],{name:"percent",hash:{},data:r}))+';"></div>\n        </div>\n      </td>\n    </tr>\n'},2:function(e,t,n,r,i){var s=t.helperMissing,o=this.escapeExpression;return'          <a href="'+o((t.issueFilterItemLink||e&&e.issueFilterItemLink||s).call(e,i[2]!=null?i[2].parsedQuery:i[2],"planned","false",i[2]!=null?i[2].displayMode:i[2],{name:"issueFilterItemLink",hash:{},data:r}))+'">'+o((t.t||e&&e.t||s).call(e,"issue.unplanned",{name:"t",hash:{},data:r}))+"</a>\n"},4:function(e,t,n,r,i){var s=t.helperMissing,o=this.escapeExpression;return'          <a href="'+o((t.issueFilterItemLink||e&&e.issueFilterItemLink||s).call(e,i[2]!=null?i[2].parsedQuery:i[2],"actionPlans",e!=null?e.val:e,i[2]!=null?i[2].displayMode:i[2],{name:"issueFilterItemLink",hash:{},data:r}))+'">'+o((t["default"]||e&&e["default"]||s).call(e,e!=null?e.label:e,e!=null?e.val:e,{name:"default",hash:{},data:r}))+"</a>\n"},6:function(e,t,n,r){return"+"},8:function(e,t,n,r){var i,s="";return i=this.invokePartial(n["_widget-issue-filter-limit"],"  ","_widget-issue-filter-limit",e,undefined,t,n,r),i!=null&&(s+=i),s},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,r,i){var s,o='<table class="data zebra">\n';return s=this.invokePartial(n["_widget-issue-filter-total"],"  ","_widget-issue-filter-total",e,undefined,t,n,r),s!=null&&(o+=s),s=t.each.call(e,e!=null?e.items:e,{name:"each",hash:{},fn:this.program(1,r,i),inverse:this.noop,data:r}),s!=null&&(o+=s),o+="</table>\n\n",s=t["if"].call(e,e!=null?e.maxResultsReached:e,{name:"if",hash:{},fn:this.program(8,r,i),inverse:this.noop,data:r}),s!=null&&(o+=s),o},usePartial:!0,useData:!0,useDepths:!0}),this.Templates["widget-issue-filter-assignees"]=Handlebars.template({1:function(e,t,n,r,i){var s,o=t.helperMissing,u=this.escapeExpression,a="    <tr>\n      <td>\n";return s=(t.eq||e&&e.eq||o).call(e,e!=null?e.val:e,"",{name:"eq",hash:{},fn:this.program(2,r,i),inverse:this.program(4,r,i),data:r}),s!=null&&(a+=s),a+='      </td>\n      <td class="text-right nowrap">\n        ',s=(t.notNull||e&&e.notNull||o).call(e,i[1]!=null?i[1].periodDate:i[1],{name:"notNull",hash:{},fn:this.program(6,r,i),inverse:this.noop,data:r}),s!=null&&(a+=s),a+u((t.issueFilterValue||e&&e.issueFilterValue||o).call(e,e!=null?e.count:e,i[1]!=null?i[1].displayMode:i[1],{name:"issueFilterValue",hash:{},data:r}))+'\n      </td>\n      <td class="barchart">\n        <div class="barchart" style="width: 100%;">\n          <div style="width: '+u((t.percent||e&&e.percent||o).call(e,e!=null?e.count:e,i[1]!=null?i[1].total:i[1],{name:"percent",hash:{},data:r}))+';"></div>\n        </div>\n      </td>\n    </tr>\n'},2:function(e,t,n,r,i){var s=t.helperMissing,o=this.escapeExpression;return'          <a href="'+o((t.issueFilterItemLink||e&&e.issueFilterItemLink||s).call(e,i[2]!=null?i[2].parsedQuery:i[2],"assigned","false",i[2]!=null?i[2].displayMode:i[2],{name:"issueFilterItemLink",hash:{},data:r}))+'">'+o((t.t||e&&e.t||s).call(e,"unassigned",{name:"t",hash:{},data:r}))+"</a>\n"},4:function(e,t,n,r,i){var s=t.helperMissing,o=this.escapeExpression;return'          <a href="'+o((t.issueFilterItemLink||e&&e.issueFilterItemLink||s).call(e,i[2]!=null?i[2].parsedQuery:i[2],"assignees",e!=null?e.val:e,i[2]!=null?i[2].displayMode:i[2],{name:"issueFilterItemLink",hash:{},data:r}))+'">'+o((t["default"]||e&&e["default"]||s).call(e,e!=null?e.label:e,e!=null?e.val:e,{name:"default",hash:{},data:r}))+"</a>\n"},6:function(e,t,n,r){return"+"},8:function(e,t,n,r){var i,s="";return i=this.invokePartial(n["_widget-issue-filter-limit"],"  ","_widget-issue-filter-limit",e,undefined,t,n,r),i!=null&&(s+=i),s},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,r,i){var s,o='<table class="data zebra">\n';return s=this.invokePartial(n["_widget-issue-filter-total"],"  ","_widget-issue-filter-total",e,undefined,t,n,r),s!=null&&(o+=s),s=t.each.call(e,e!=null?e.items:e,{name:"each",hash:{},fn:this.program(1,r,i),inverse:this.noop,data:r}),s!=null&&(o+=s),o+="</table>\n\n",s=t["if"].call(e,e!=null?e.maxResultsReached:e,{name:"if",hash:{},fn:this.program(8,r,i),inverse:this.noop,data:r}),s!=null&&(o+=s),o},usePartial:!0,useData:!0,useDepths:!0}),this.Templates["widget-issue-filter-resolutions"]=Handlebars.template({1:function(e,t,n,r,i){var s,o=t.helperMissing,u=this.escapeExpression,a="    <tr>\n      <td>\n";return s=(t.eq||e&&e.eq||o).call(e,e!=null?e.val:e,"",{name:"eq",hash:{},fn:this.program(2,r,i),inverse:this.program(4,r,i),data:r}),s!=null&&(a+=s),a+='      </td>\n      <td class="text-right nowrap">\n        ',s=(t.notNull||e&&e.notNull||o).call(e,i[1]!=null?i[1].periodDate:i[1],{name:"notNull",hash:{},fn:this.program(6,r,i),inverse:this.noop,data:r}),s!=null&&(a+=s),a+u((t.issueFilterValue||e&&e.issueFilterValue||o).call(e,e!=null?e.count:e,i[1]!=null?i[1].displayMode:i[1],{name:"issueFilterValue",hash:{},data:r}))+'\n      </td>\n      <td class="barchart">\n        <div class="barchart" style="width: 100%;">\n          <div style="width: '+u((t.percent||e&&e.percent||o).call(e,e!=null?e.count:e,i[1]!=null?i[1].total:i[1],{name:"percent",hash:{},data:r}))+';"></div>\n        </div>\n      </td>\n    </tr>\n'},2:function(e,t,n,r,i){var s=t.helperMissing,o=this.escapeExpression;return'          <a href="'+o((t.issueFilterItemLink||e&&e.issueFilterItemLink||s).call(e,i[2]!=null?i[2].parsedQuery:i[2],"resolved","false",i[2]!=null?i[2].displayMode:i[2],{name:"issueFilterItemLink",hash:{},data:r}))+'">'+o((t.t||e&&e.t||s).call(e,"unresolved",{name:"t",hash:{},data:r}))+"</a>\n"},4:function(e,t,n,r,i){var s=t.helperMissing,o=this.escapeExpression;return'          <a href="'+o((t.issueFilterItemLink||e&&e.issueFilterItemLink||s).call(e,i[2]!=null?i[2].parsedQuery:i[2],"resolutions",e!=null?e.val:e,i[2]!=null?i[2].displayMode:i[2],{name:"issueFilterItemLink",hash:{},data:r}))+'">'+o((t.t||e&&e.t||s).call(e,"issue.resolution",e!=null?e.val:e,{name:"t",hash:{},data:r}))+"</a>\n"},6:function(e,t,n,r){return"+"},8:function(e,t,n,r){var i,s="";return i=this.invokePartial(n["_widget-issue-filter-limit"],"  ","_widget-issue-filter-limit",e,undefined,t,n,r),i!=null&&(s+=i),s},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,r,i){var s,o='<table class="data zebra">\n';return s=this.invokePartial(n["_widget-issue-filter-total"],"  ","_widget-issue-filter-total",e,undefined,t,n,r),s!=null&&(o+=s),s=t.each.call(e,e!=null?e.items:e,{name:"each",hash:{},fn:this.program(1,r,i),inverse:this.noop,data:r}),s!=null&&(o+=s),o+="</table>\n\n",s=t["if"].call(e,e!=null?e.maxResultsReached:e,{name:"if",hash:{},fn:this.program(8,r,i),inverse:this.noop,data:r}),s!=null&&(o+=s),o},usePartial:!0,useData:!0,useDepths:!0}),this.Templates["widget-issue-filter-severities"]=Handlebars.template({1:function(e,t,n,r){return"+"},3:function(e,t,n,r,i){var s,o=t.helperMissing,u=this.escapeExpression,a="    <tr>\n      <td>\n        "+u((t.severityIcon||e&&e.severityIcon||o).call(e,e!=null?e.val:e,{name:"severityIcon",hash:{},data:r}))+'\n        <a href="'+u((t.issueFilterItemLink||e&&e.issueFilterItemLink||o).call(e,i[1]!=null?i[1].parsedQuery:i[1],i[1]!=null?i[1].property:i[1],e!=null?e.val:e,i[1]!=null?i[1].displayMode:i[1],{name:"issueFilterItemLink",hash:{},data:r}))+'">'+u((t.t||e&&e.t||o).call(e,"severity",e!=null?e.val:e,{name:"t",hash:{},data:r}))+'</a>\n      </td>\n      <td class="text-right nowrap">\n        ';return s=(t.notNull||e&&e.notNull||o).call(e,i[1]!=null?i[1].periodDate:i[1],{name:"notNull",hash:{},fn:this.program(1,r,i),inverse:this.noop,data:r}),s!=null&&(a+=s),a+u((t.issueFilterValue||e&&e.issueFilterValue||o).call(e,e!=null?e.count:e,i[1]!=null?i[1].displayMode:i[1],{name:"issueFilterValue",hash:{},data:r}))+"\n      </td>\n    </tr>\n"},5:function(e,t,n,r){var i,s="";return i=this.invokePartial(n["_widget-issue-filter-limit"],"  ","_widget-issue-filter-limit",e,undefined,t,n,r),i!=null&&(s+=i),s},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,r,i){var s,o=t.helperMissing,u=this.escapeExpression,a='<table class="data zebra">\n  <tr>\n    <td>\n      <a href="'+u((t.issueFilterTotalLink||e&&e.issueFilterTotalLink||o).call(e,e!=null?e.parsedQuery:e,e!=null?e.displayMode:e,{name:"issueFilterTotalLink",hash:{},data:r}))+'"><strong>'+u((t.t||e&&e.t||o).call(e,"total",{name:"t",hash:{},data:r}))+'</strong></a>\n    </td>\n    <td class="text-right"><strong>';return s=(t.notNull||e&&e.notNull||o).call(e,e!=null?e.periodDate:e,{name:"notNull",hash:{},fn:this.program(1,r,i),inverse:this.noop,data:r}),s!=null&&(a+=s),a+=u((t.issueFilterValue||e&&e.issueFilterValue||o).call(e,e!=null?e.total:e,e!=null?e.displayMode:e,{name:"issueFilterValue",hash:{},data:r}))+"</strong></td>\n  </tr>\n",s=t.each.call(e,e!=null?e.items:e,{name:"each",hash:{},fn:this.program(3,r,i),inverse:this.noop,data:r}),s!=null&&(a+=s),a+="</table>\n\n",s=t["if"].call(e,e!=null?e.maxResultsReached:e,{name:"if",hash:{},fn:this.program(5,r,i),inverse:this.noop,data:r}),s!=null&&(a+=s),a},usePartial:!0,useData:!0,useDepths:!0}),this.Templates["widget-issue-filter-statuses"]=Handlebars.template({1:function(e,t,n,r,i){var s,o=t.helperMissing,u=this.escapeExpression,a="    <tr>\n      <td>\n        "+u((t.statusIcon||e&&e.statusIcon||o).call(e,e!=null?e.val:e,{name:"statusIcon",hash:{},data:r}))+'\n        <a href="'+u((t.issueFilterItemLink||e&&e.issueFilterItemLink||o).call(e,i[1]!=null?i[1].parsedQuery:i[1],i[1]!=null?i[1].property:i[1],e!=null?e.val:e,i[1]!=null?i[1].displayMode:i[1],{name:"issueFilterItemLink",hash:{},data:r}))+'">'+u((t.t||e&&e.t||o).call(e,"issue.status",e!=null?e.val:e,{name:"t",hash:{},data:r}))+'</a>\n      </td>\n      <td class="text-right nowrap">\n        ';return s=(t.notNull||e&&e.notNull||o).call(e,i[1]!=null?i[1].periodDate:i[1],{name:"notNull",hash:{},fn:this.program(2,r,i),inverse:this.noop,data:r}),s!=null&&(a+=s),a+u((t.issueFilterValue||e&&e.issueFilterValue||o).call(e,e!=null?e.count:e,i[1]!=null?i[1].displayMode:i[1],{name:"issueFilterValue",hash:{},data:r}))+'\n      </td>\n      <td class="barchart">\n        <div class="barchart" style="width: 100%;">\n          <div style="width: '+u((t.percent||e&&e.percent||o).call(e,e!=null?e.count:e,i[1]!=null?i[1].total:i[1],{name:"percent",hash:{},data:r}))+';"></div>\n        </div>\n      </td>\n    </tr>\n'},2:function(e,t,n,r){return"+"},4:function(e,t,n,r){var i,s="";return i=this.invokePartial(n["_widget-issue-filter-limit"],"  ","_widget-issue-filter-limit",e,undefined,t,n,r),i!=null&&(s+=i),s},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,r,i){var s,o='<table class="data zebra">\n';return s=this.invokePartial(n["_widget-issue-filter-total"],"  ","_widget-issue-filter-total",e,undefined,t,n,r),s!=null&&(o+=s),s=t.each.call(e,e!=null?e.items:e,{name:"each",hash:{},fn:this.program(1,r,i),inverse:this.noop,data:r}),s!=null&&(o+=s),o+="</table>\n\n",s=t["if"].call(e,e!=null?e.maxResultsReached:e,{name:"if",hash:{},fn:this.program(4,r,i),inverse:this.noop,data:r}),s!=null&&(o+=s),o},usePartial:!0,useData:!0,useDepths:!0}),this.Templates["widget-issue-filter"]=Handlebars.template({1:function(e,t,n,r,i){var s,o,u="function",a=t.helperMissing,f=this.escapeExpression,l='    <tr>\n      <td>\n        <a href="'+f((o=(o=t.searchLink||(e!=null?e.searchLink:e))!=null?o:a,typeof o===u?o.call(e,{name:"searchLink",hash:{},data:r}):o))+'">'+f((t["default"]||e&&e["default"]||a).call(e,e!=null?e.label:e,e!=null?e.val:e,{name:"default",hash:{},data:r}))+'</a>\n      </td>\n      <td class="text-right nowrap">\n        ';return s=(t.notNull||e&&e.notNull||a).call(e,i[1]!=null?i[1].periodDate:i[1],{name:"notNull",hash:{},fn:this.program(2,r,i),inverse:this.noop,data:r}),s!=null&&(l+=s),l+f((t.issueFilterValue||e&&e.issueFilterValue||a).call(e,e!=null?e.count:e,i[1]!=null?i[1].displayMode:i[1],{name:"issueFilterValue",hash:{},data:r}))+'\n      </td>\n      <td class="barchart">\n        <div class="barchart" style="width: 100%;">\n          <div style="width: '+f((t.percent||e&&e.percent||a).call(e,e!=null?e.count:e,i[1]!=null?i[1].total:i[1],{name:"percent",hash:{},data:r}))+';"></div>\n        </div>\n      </td>\n    </tr>\n'},2:function(e,t,n,r){return"+"},4:function(e,t,n,r){var i,s="";return i=this.invokePartial(n["_widget-issue-filter-limit"],"  ","_widget-issue-filter-limit",e,undefined,t,n,r),i!=null&&(s+=i),s},compiler:[6,">= 2.0.0-beta.1"],main:function(e,t,n,r,i){var s,o='<table class="data zebra">\n';return s=this.invokePartial(n["_widget-issue-filter-total"],"  ","_widget-issue-filter-total",e,undefined,t,n,r),s!=null&&(o+=s),s=t.each.call(e,e!=null?e.items:e,{name:"each",hash:{},fn:this.program(1,r,i),inverse:this.noop,data:r}),s!=null&&(o+=s),o+="</table>\n\n",s=t["if"].call(e,e!=null?e.maxResultsReached:e,{name:"if",hash:{},fn:this.program(4,r,i),inverse:this.noop,data:r}),s!=null&&(o+=s),o},usePartial:!0,useData:!0,useDepths:!0}),define("widgets/issue-filter/templates",function(){}),define("widgets/issue-filter/widget",["./templates"],function(){function u(e,t){t=t||"|";var n=[];return _.forEach(e,function(e,t){n.push(""+t+"="+encodeURIComponent(e))}),n.join(t)}var e=jQuery,t=15,n=function(e){return-e.count},r=function(e){var t=this.query[this.property];return t==null||t!=null&&t.split(",").indexOf(e.val)!==-1},i=function(e){return e.val},s=function(e,t,n,r,i,s){var o={};o[t]=e.val;var a=_.extend({},n,o);return s==="debt"&&(a.facetMode="debt"),a.componentKey!=null?baseUrl+"/component_issues/index?id="+encodeURIComponent(a.componentKey)+"#"+u(_.omit(a,"componentKey")):baseUrl+"/issues/search#"+u(a)},o={severities:{template:"widget-issue-filter-severities",comparator:function(e){var t=["BLOCKER","CRITICAL","MAJOR","MINOR","INFO"];return t.indexOf(e.val)}},statuses:{template:"widget-issue-filter-statuses",comparator:function(e){var t=["OPEN","REOPENED","CONFIRMED","RESOLVED","CLOSED"];return t.indexOf(e.val)},filter:function(e){var t=""+this.query.resolved=="false",n=e.val==="RESOLVED"||e.val==="CLOSED";return!t||!n}},resolutions:{template:"widget-issue-filter-resolutions",comparator:function(e){var t=["","FALSE-POSITIVE","WONTFIX","FIXED","REMOVED"];return t.indexOf(e.val)},filter:function(e){return""+this.query.resolved=="false"?e.val==="":r.call(this,e)}},rules:{label:function(e,t){if(_.isArray(t.rules)){var n=_.findWhere(t.rules,{key:e.val});if(n!=null)return n.name}}},projectUuids:{label:function(e,t){if(_.isArray(t.projects)){var n=_.findWhere(t.projects,{uuid:e.val});if(n!=null)return n.name}}},assignees:{template:"widget-issue-filter-assignees",label:function(e,t){if(_.isArray(t.users)){var n=_.findWhere(t.users,{login:e.val});if(n!=null)return n.name}},filter:function(e){return""+this.query.assigned=="false"?e.val==="":r.call(this,e)}},languages:{label:function(e,t){if(_.isArray(t.languages)){var n=_.findWhere(t.languages,{key:e.val});if(n!=null)return n.name}}},reporters:{label:function(e,t){if(_.isArray(t.users)){var n=_.findWhere(t.users,{login:e.val});if(n!=null)return n.name}}},actionPlans:{template:"widget-issue-filter-action-plans",label:function(e,t){if(_.isArray(t.actionPlans)){var n=_.findWhere(t.actionPlans,{key:e.val});if(n!=null)return n.name}},filter:function(e){return""+this.query.planned=="false"?e.val==="":r.call(this,e)}},createdAt:{comparator:function(e){return-moment(e.val).unix()},label:function(e,t,n,r,i){var s=moment(e.val),o=i.createdBefore!=null?moment(i.createdBefore):moment(),u=r<n.length-1?moment(n[r+1].val).subtract(1,"days"):o,a=u.diff(s,"days")<=1;return s.format("LL")+(a?"":" – "+u.format("LL"))},link:function(e,t,n,r,i,s){var o=moment(e.val),a=n.createdBefore!=null?moment(n.createdBefore):moment(),f=r<i.length-1?moment(i[r+1].val).subtract(1,"days"):a,l=f.diff(o,"days")<=1;l&&f.add(1,"days");var c=_.extend({},n,{createdAfter:o.format("YYYY-MM-DD"),createdBefore:f.format("YYYY-MM-DD")});return s==="debt"&&(c.facetMode="debt"),c.componentKey!=null?baseUrl+"/component_issues/index?id="+encodeURIComponent(c.componentKey)+"#"+u(_.omit(c,"componentKey")):baseUrl+"/issues/search#"+u(c)}}};return Handlebars.registerHelper("issueFilterItemLink",function(e,t,n,r){var i={};i[t]=n;var s=_.extend({},e,i);return r==="debt"&&(s.facetMode="debt"),s.componentKey!=null?baseUrl+"/component_issues/index?id="+encodeURIComponent(s.componentKey)+"#"+u(_.omit(s,"componentKey")):baseUrl+"/issues/search#"+u(s)}),Handlebars.registerHelper("issueFilterTotalLink",function(e,t){var n=_.extend({},e);return t==="debt"&&(n.facetMode="debt"),n.componentKey!=null?baseUrl+"/component_issues/index?id="+encodeURIComponent(n.componentKey)+"#"+u(_.omit(n,"componentKey")):baseUrl+"/issues/search#"+u(n)}),Handlebars.registerHelper("issueFilterValue",function(e,t){var n=t==="debt"?"SHORT_WORK_DUR":"SHORT_INT";return window.formatMeasure(e,n)}),Marionette.ItemView.extend({getTemplate:function(){var e=this.conf!=null&&this.conf.template!=null?this.conf.template:"widget-issue-filter";return Templates[e]},initialize:function(){this.shouldIgnorePeriod=!1,this.model=new Backbone.Model({query:this.options.query,parsedQuery:this.getParsedQuery(),property:this.options.distributionAxis}),this.shouldIgnorePeriod||this.model.set({periodDate:this.options.periodDate}),this.listenTo(this.model,"change",this.render),this.conf=o[this.options.distributionAxis],this.query=this.getParsedQuery(),this.requestIssues()},getParsedQuery:function(){var e=this.options.query||"",t={};return e.split("|").forEach(function(e){var n=e.split("=");n.length===2&&(t[n[0]]=n[1])}),this.options.componentKey!=null&&_.extend(t,{componentKey:this.options.componentKey}),!this.hasDateFilter(t)&&this.options.periodDate!=null?_.extend(t,{createdAfter:this.options.periodDate}):this.shouldIgnorePeriod=!0,t},hasDateFilter:function(e){var t=e||this.model.get("parsedQuery");return _.some(["createdAt","createdBefore","createdAfter","createdInLast"],function(e){return t[e]!=null})},sortItems:function(e){var t=this.conf!=null&&this.conf.comparator!=null?this.conf.comparator:n;return _.sortBy(e,t)},filterItems:function(e){var t=this.conf!=null&&this.conf.filter!=null?this.conf.filter:r;return _.filter(e,t,{query:this.query,property:this.options.distributionAxis})},withLink:function(e){var t=this.conf!=null&&this.conf.link!=null?this.conf.link:s,n=this.options.distributionAxis,r=this.options.displayMode,i=this.model.get("parsedQuery");return e.map(function(s,o){return _.extend(s,{searchLink:t(s,n,i,o,e,r)})})},withLabels:function(e){var t=this.conf!=null&&this.conf.label!=null?this.conf.label:i,n=this.model.get("rawResponse"),r=this.model.get("parsedQuery");return e.map(function(i,s){return _.extend(i,{label:t(i,n,e,s,r)})})},requestIssues:function(){var n=this,r=this.options.displayMode,i=baseUrl+"/api/issues/search",s=_.extend({},this.query,{ps:1,facets:this.options.distributionAxis,facetMode:r});return this.options.componentUuid!=null&&_.extend(s,{componentUuids:this.options.componentUuid}),this.options.periodDate!=null&&!this.shouldIgnorePeriod&&_.extend(s,{createdAfter:this.options.periodDate}),e.get(i,s).done(function(e){if(_.isArray(e.facets)&&e.facets.length===1){n.model.set({rawResponse:e},{silent:!0});var i=n.sortItems(n.withLabels(n.withLink(n.filterItems(e.facets[0].values))));n.model.set({items:i,maxResultsReached:i.length>=t,maxResults:i.length,total:r==="debt"?e.debtTotal:e.total})}})},serializeData:function(){return _.extend(this._super(),{displayMode:this.options.displayMode})}})});