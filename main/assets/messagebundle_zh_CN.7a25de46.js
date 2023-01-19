const E="\u5361\u5185\u5BB9",_="\u5361",T="\u5361\u62AC\u5934",A="\u4EA4\u4E92\u5F0F\u5361\u62AC\u5934",I="\u5934\u50CF",R="{0} \u4E2A\u663E\u793A\uFF0C{1} \u4E2A\u9690\u85CF\u3002",O="\u4E3A\u6574\u4E2A\u5217\u8868\u6FC0\u6D3B\u3002",L="\u5355\u72EC\u5934\u50CF\u3002",N="\u8054\u5408\u5934\u50CF\u3002",S="\u6309\u7BAD\u5934\u952E\u8FDB\u884C\u79FB\u52A8\u3002",C="\u5FBD\u7AE0",P="{0} / {1}",D="\u4F4D\u7F6E\u6307\u793A\u8282\u70B9\u8DDF\u8E2A",U="\u66F4\u591A",B="\u53D6\u6D88",t="\u8BF7\u7A0D\u5019",s="\u79EF\u6781\u64CD\u4F5C",n="\u6D88\u6781\u64CD\u4F5C",o="\u52A0\u91CD",c="/",M="\u663E\u793A\u9879\u76EE {0}\uFF0C\u5171 {1} \u4E2A",G="\u4E0A\u4E00\u9875",K="\u4E0B\u4E00\u9875",V="\u8C03\u8272\u677F - \u9884\u5B9A\u4E49\u989C\u8272",H="\u8C03\u8272\u677F",X="\u989C\u8272",Y="\u53D6\u6D88",W="\u786E\u5B9A",F="\u66F4\u6539\u989C\u8272",Z="\u66F4\u591A\u989C\u8272...",a="Alpha \u63A7\u5236",e="\u8272\u5EA6\u63A7\u5236",l="\u5341\u516D\u8FDB\u5236",h="\u7EA2\u8272",p="\u7EFF\u8272",r="\u84DD\u8272",d="Alpha",u="\u6253\u5F00\u9009\u53D6\u5668",J="\u65E5\u671F\u8F93\u5165",b="\u65E5\u671F\u65F6\u95F4\u8F93\u5165",f="\u65E5\u671F\u8303\u56F4\u8F93\u5165",g="\u5220\u9664",m="\u6D4F\u89C8...",v="\u4E0A\u8F7D\u6587\u4EF6",x="\u7EC4\u62AC\u5934",z="\u9009\u62E9\u7EC4\u5408\u6846",i="\u9009\u62E9\u9009\u9879",j="\u6709\u53EF\u7528\u5EFA\u8BAE",k="\u9009\u62E9",q="1 \u4E2A\u7ED3\u679C\u53EF\u7528",w="{0} \u4E2A\u7ED3\u679C\u53EF\u7528",y="\u65E0\u7ED3\u679C",Q="\u9690\u853D",$="\u52A0\u91CD",EE="\u5217\u8868\u9879\u76EE {0}/{1}",_E="\u5DF2\u9009\u62E9",TE="\u672A\u9009\u62E9",AE="\u7EC4\u62AC\u5934",IE="\u591A\u91CD\u9009\u62E9\u6A21\u5F0F",RE="\u9879\u76EE\u9009\u62E9\u3002",OE="\u5305\u542B\u53EF\u9009\u62E9\u7684\u9879\u76EE",LE="\u5305\u542B\u53EF\u591A\u91CD\u9009\u62E9\u7684\u9879\u76EE",NE="\u5305\u542B\u53EF\u5220\u9664\u7684\u9879\u76EE",SE="\u4FE1\u606F\u680F\u5173\u95ED",CE="\u53EF\u5173\u95ED",PE="\u9519\u8BEF\u4FE1\u606F\u680F",DE="\u8B66\u544A\u4FE1\u606F\u680F",UE="\u6210\u529F\u4FE1\u606F\u680F",BE="\u4FE1\u606F\u680F",tE="\u786E\u5B9A",sE="\u5DF2\u9009\u62E9\u6B64\u503C\u3002",nE="\u591A\u503C\u8F93\u5165",oE="\u5176\u4ED6 {0} \u4E2A",cE="\u5C55\u5F00/\u6298\u53E0",ME="\u8303\u56F4",GE="\u5DE6\u624B\u67C4",KE="\u53F3\u624B\u67C4",VE="\u8BC4\u7EA7",HE="\u8BC4\u7EA7\u6307\u793A\u5668",XE="\u62D2\u7EDD",YE="\u5206\u6BB5\u5F0F\u6309\u94AE\u7EC4",WE="\u6309\u7A7A\u683C\u952E\u6216 ENTER \u9009\u62E9\u9879\u76EE",FE="\u5206\u6BB5\u5F0F\u6309\u94AE",ZE="\u6ED1\u5757\u624B\u67C4",aE="\u66F4\u591A",eE="\u62AC\u5934\u884C 1 / {0}",lE="{0} / {1}",hE="\u7EC4\u62AC\u5934\u884C",pE="\u9879\u76EE\u9009\u62E9",rE="\u9009\u62E9\u6240\u6709\u884C",dE="\u79EF\u6781",uE="\u6D88\u6781",JE="\u4E34\u754C",bE="\u4E2D\u6027",fE="\u4E0B\u4E00\u4E2A",gE="\u4E0A\u4E00\u4E2A",mE="\u6EA2\u51FA\u83DC\u5355",vE="\u66F4\u591A",xE="\u53D6\u6D88",zE="\u5269\u4F59 {0} \u4E2A\u5B57\u7B26",iE="\u8D85\u8FC7\u9650\u5236 {0} \u4E2A\u5B57\u7B26",jE="\u5C0F\u65F6",kE="\u5206\u949F",qE="\u79D2",wE="\u786E\u5B9A",yE="\u53D6\u6D88",QE="\u65F6\u95F4\u8F93\u5165",$E="\u6301\u7EED\u65F6\u95F4\u8F93\u5165",E_="\u65E5\u671F",__="\u65F6\u95F4",T_="\u53EF\u5220\u9664",A_="\u65E0\u4EE4\u724C",I_="\u5305\u542B 1 \u4E2A\u4EE4\u724C",R_="\u5305\u542B {0} \u4E2A\u4EE4\u724C",O_="\u5206\u8BCD\u5668",L_="\u79FB\u9664",N_="\u6811\u9879\u76EE",S_="\u5C55\u5F00\u8282\u70B9",C_="\u6298\u53E0\u8282\u70B9",P_="\u503C\u72B6\u6001\u9519\u8BEF",D_="\u503C\u72B6\u6001\u8B66\u544A",U_="\u503C\u72B6\u6001\u6210\u529F",B_="\u503C\u72B6\u6001\u4FE1\u606F",t_="\u65E0\u6548\u8F93\u5165",s_="\u5DF2\u53D1\u51FA\u8B66\u544A",n_="\u4FE1\u606F\u8F93\u5165",o_="\u5DF2\u6210\u529F\u9A8C\u8BC1\u8F93\u5165",c_="\u4E0B\u4E00\u4E2A",M_="\u4E0A\u4E00\u4E2A",G_="\u5468\u53F7",K_="\u975E\u5DE5\u4F5C\u65E5",V_="\u4ECA\u5929",H_="\u6708\u4EFD\u9009\u53D6\u5668",X_="\u5E74\u5EA6\u9009\u53D6\u5668",Y_="\u51CF\u5C11",W_="\u589E\u52A0",F_="\u62C6\u5206\u6309\u94AE",Z_="\u6309\u7A7A\u683C\u952E\u6216 Enter \u89E6\u53D1\u7F3A\u7701\u64CD\u4F5C\uFF0C\u6309 Alt + \u5411\u4E0B\u7BAD\u5934\u6216 F4 \u89E6\u53D1\u7BAD\u5934\u64CD\u4F5C",a_="\u8FD4\u56DE",e_="\u62D2\u7EDD";var l_={ARIA_LABEL_CARD_CONTENT:E,ARIA_ROLEDESCRIPTION_CARD:_,ARIA_ROLEDESCRIPTION_CARD_HEADER:T,ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER:A,AVATAR_TOOLTIP:I,AVATAR_GROUP_DISPLAYED_HIDDEN_LABEL:R,AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL:O,AVATAR_GROUP_ARIA_LABEL_INDIVIDUAL:L,AVATAR_GROUP_ARIA_LABEL_GROUP:N,AVATAR_GROUP_MOVE:S,BADGE_DESCRIPTION:C,BREADCRUMB_ITEM_POS:P,BREADCRUMBS_ARIA_LABEL:D,BREADCRUMBS_OVERFLOW_ARIA_LABEL:U,BREADCRUMBS_CANCEL_BUTTON:B,BUSY_INDICATOR_TITLE:t,BUTTON_ARIA_TYPE_ACCEPT:s,BUTTON_ARIA_TYPE_REJECT:n,BUTTON_ARIA_TYPE_EMPHASIZED:o,CAROUSEL_OF_TEXT:c,CAROUSEL_DOT_TEXT:M,CAROUSEL_PREVIOUS_ARROW_TEXT:G,CAROUSEL_NEXT_ARROW_TEXT:K,COLORPALETTE_CONTAINER_LABEL:V,COLORPALETTE_POPOVER_TITLE:H,COLORPALETTE_COLOR_LABEL:X,COLOR_PALETTE_DIALOG_CANCEL_BUTTON:Y,COLOR_PALETTE_DIALOG_OK_BUTTON:W,COLOR_PALETTE_DIALOG_TITLE:F,COLOR_PALETTE_MORE_COLORS_TEXT:Z,COLORPICKER_ALPHA_SLIDER:a,COLORPICKER_HUE_SLIDER:e,COLORPICKER_HEX:l,COLORPICKER_RED:h,COLORPICKER_GREEN:p,COLORPICKER_BLUE:r,COLORPICKER_ALPHA:d,DATEPICKER_OPEN_ICON_TITLE:u,DATEPICKER_DATE_DESCRIPTION:J,DATETIME_DESCRIPTION:b,DATERANGE_DESCRIPTION:f,DELETE:g,FILEUPLOAD_BROWSE:m,FILEUPLOADER_TITLE:v,GROUP_HEADER_TEXT:x,SELECT_ROLE_DESCRIPTION:z,SELECT_OPTIONS:i,INPUT_SUGGESTIONS:j,INPUT_SUGGESTIONS_TITLE:k,INPUT_SUGGESTIONS_ONE_HIT:q,INPUT_SUGGESTIONS_MORE_HITS:w,INPUT_SUGGESTIONS_NO_HIT:y,LINK_SUBTLE:Q,LINK_EMPHASIZED:$,LIST_ITEM_POSITION:EE,LIST_ITEM_SELECTED:_E,LIST_ITEM_NOT_SELECTED:TE,LIST_ITEM_GROUP_HEADER:AE,ARIA_LABEL_LIST_ITEM_CHECKBOX:IE,ARIA_LABEL_LIST_ITEM_RADIO_BUTTON:RE,ARIA_LABEL_LIST_SELECTABLE:OE,ARIA_LABEL_LIST_MULTISELECTABLE:LE,ARIA_LABEL_LIST_DELETABLE:NE,MESSAGE_STRIP_CLOSE_BUTTON:SE,MESSAGE_STRIP_CLOSABLE:CE,MESSAGE_STRIP_ERROR:PE,MESSAGE_STRIP_WARNING:DE,MESSAGE_STRIP_SUCCESS:UE,MESSAGE_STRIP_INFORMATION:BE,MULTICOMBOBOX_DIALOG_OK_BUTTON:tE,VALUE_STATE_ERROR_ALREADY_SELECTED:sE,MULTIINPUT_ROLEDESCRIPTION_TEXT:nE,MULTIINPUT_SHOW_MORE_TOKENS:oE,PANEL_ICON:cE,RANGE_SLIDER_ARIA_DESCRIPTION:ME,RANGE_SLIDER_START_HANDLE_DESCRIPTION:GE,RANGE_SLIDER_END_HANDLE_DESCRIPTION:KE,RATING_INDICATOR_TOOLTIP_TEXT:VE,RATING_INDICATOR_TEXT:HE,RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON:XE,SEGMENTEDBUTTON_ARIA_DESCRIPTION:YE,SEGMENTEDBUTTON_ARIA_DESCRIBEDBY:WE,SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION:FE,SLIDER_ARIA_DESCRIPTION:ZE,LOAD_MORE_TEXT:aE,TABLE_HEADER_ROW_INFORMATION:eE,TABLE_ROW_POSITION:lE,TABLE_GROUP_ROW_ARIA_LABEL:hE,ARIA_LABEL_ROW_SELECTION:pE,ARIA_LABEL_SELECT_ALL_CHECKBOX:rE,TAB_ARIA_DESIGN_POSITIVE:dE,TAB_ARIA_DESIGN_NEGATIVE:uE,TAB_ARIA_DESIGN_CRITICAL:JE,TAB_ARIA_DESIGN_NEUTRAL:bE,TABCONTAINER_NEXT_ICON_ACC_NAME:fE,TABCONTAINER_PREVIOUS_ICON_ACC_NAME:gE,TABCONTAINER_OVERFLOW_MENU_TITLE:mE,TABCONTAINER_END_OVERFLOW:vE,TABCONTAINER_POPOVER_CANCEL_BUTTON:xE,TEXTAREA_CHARACTERS_LEFT:zE,TEXTAREA_CHARACTERS_EXCEEDED:iE,TIMEPICKER_HOURS_LABEL:jE,TIMEPICKER_MINUTES_LABEL:kE,TIMEPICKER_SECONDS_LABEL:qE,TIMEPICKER_SUBMIT_BUTTON:wE,TIMEPICKER_CANCEL_BUTTON:yE,TIMEPICKER_INPUT_DESCRIPTION:QE,DURATION_INPUT_DESCRIPTION:$E,DATETIME_PICKER_DATE_BUTTON:E_,DATETIME_PICKER_TIME_BUTTON:__,TOKEN_ARIA_DELETABLE:T_,TOKENIZER_ARIA_CONTAIN_TOKEN:A_,TOKENIZER_ARIA_CONTAIN_ONE_TOKEN:I_,TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS:R_,TOKENIZER_ARIA_LABEL:O_,TOKENIZER_POPOVER_REMOVE:L_,TREE_ITEM_ARIA_LABEL:N_,TREE_ITEM_EXPAND_NODE:S_,TREE_ITEM_COLLAPSE_NODE:C_,VALUE_STATE_TYPE_ERROR:P_,VALUE_STATE_TYPE_WARNING:D_,VALUE_STATE_TYPE_SUCCESS:U_,VALUE_STATE_TYPE_INFORMATION:B_,VALUE_STATE_ERROR:t_,VALUE_STATE_WARNING:s_,VALUE_STATE_INFORMATION:n_,VALUE_STATE_SUCCESS:o_,CALENDAR_HEADER_NEXT_BUTTON:c_,CALENDAR_HEADER_PREVIOUS_BUTTON:M_,DAY_PICKER_WEEK_NUMBER_TEXT:G_,DAY_PICKER_NON_WORKING_DAY:K_,DAY_PICKER_TODAY:V_,MONTH_PICKER_DESCRIPTION:H_,YEAR_PICKER_DESCRIPTION:X_,STEPINPUT_DEC_ICON_TITLE:Y_,STEPINPUT_INC_ICON_TITLE:W_,SPLIT_BUTTON_DESCRIPTION:F_,SPLIT_BUTTON_KEYBOARD_HINT:Z_,MENU_BACK_BUTTON_ARIA_LABEL:a_,MENU_CLOSE_BUTTON_ARIA_LABEL:e_};export{E as ARIA_LABEL_CARD_CONTENT,NE as ARIA_LABEL_LIST_DELETABLE,IE as ARIA_LABEL_LIST_ITEM_CHECKBOX,RE as ARIA_LABEL_LIST_ITEM_RADIO_BUTTON,LE as ARIA_LABEL_LIST_MULTISELECTABLE,OE as ARIA_LABEL_LIST_SELECTABLE,pE as ARIA_LABEL_ROW_SELECTION,rE as ARIA_LABEL_SELECT_ALL_CHECKBOX,_ as ARIA_ROLEDESCRIPTION_CARD,T as ARIA_ROLEDESCRIPTION_CARD_HEADER,A as ARIA_ROLEDESCRIPTION_INTERACTIVE_CARD_HEADER,N as AVATAR_GROUP_ARIA_LABEL_GROUP,L as AVATAR_GROUP_ARIA_LABEL_INDIVIDUAL,R as AVATAR_GROUP_DISPLAYED_HIDDEN_LABEL,S as AVATAR_GROUP_MOVE,O as AVATAR_GROUP_SHOW_COMPLETE_LIST_LABEL,I as AVATAR_TOOLTIP,C as BADGE_DESCRIPTION,D as BREADCRUMBS_ARIA_LABEL,B as BREADCRUMBS_CANCEL_BUTTON,U as BREADCRUMBS_OVERFLOW_ARIA_LABEL,P as BREADCRUMB_ITEM_POS,t as BUSY_INDICATOR_TITLE,s as BUTTON_ARIA_TYPE_ACCEPT,o as BUTTON_ARIA_TYPE_EMPHASIZED,n as BUTTON_ARIA_TYPE_REJECT,c_ as CALENDAR_HEADER_NEXT_BUTTON,M_ as CALENDAR_HEADER_PREVIOUS_BUTTON,M as CAROUSEL_DOT_TEXT,K as CAROUSEL_NEXT_ARROW_TEXT,c as CAROUSEL_OF_TEXT,G as CAROUSEL_PREVIOUS_ARROW_TEXT,X as COLORPALETTE_COLOR_LABEL,V as COLORPALETTE_CONTAINER_LABEL,H as COLORPALETTE_POPOVER_TITLE,d as COLORPICKER_ALPHA,a as COLORPICKER_ALPHA_SLIDER,r as COLORPICKER_BLUE,p as COLORPICKER_GREEN,l as COLORPICKER_HEX,e as COLORPICKER_HUE_SLIDER,h as COLORPICKER_RED,Y as COLOR_PALETTE_DIALOG_CANCEL_BUTTON,W as COLOR_PALETTE_DIALOG_OK_BUTTON,F as COLOR_PALETTE_DIALOG_TITLE,Z as COLOR_PALETTE_MORE_COLORS_TEXT,J as DATEPICKER_DATE_DESCRIPTION,u as DATEPICKER_OPEN_ICON_TITLE,f as DATERANGE_DESCRIPTION,b as DATETIME_DESCRIPTION,E_ as DATETIME_PICKER_DATE_BUTTON,__ as DATETIME_PICKER_TIME_BUTTON,K_ as DAY_PICKER_NON_WORKING_DAY,V_ as DAY_PICKER_TODAY,G_ as DAY_PICKER_WEEK_NUMBER_TEXT,g as DELETE,$E as DURATION_INPUT_DESCRIPTION,v as FILEUPLOADER_TITLE,m as FILEUPLOAD_BROWSE,x as GROUP_HEADER_TEXT,j as INPUT_SUGGESTIONS,w as INPUT_SUGGESTIONS_MORE_HITS,y as INPUT_SUGGESTIONS_NO_HIT,q as INPUT_SUGGESTIONS_ONE_HIT,k as INPUT_SUGGESTIONS_TITLE,$ as LINK_EMPHASIZED,Q as LINK_SUBTLE,AE as LIST_ITEM_GROUP_HEADER,TE as LIST_ITEM_NOT_SELECTED,EE as LIST_ITEM_POSITION,_E as LIST_ITEM_SELECTED,aE as LOAD_MORE_TEXT,a_ as MENU_BACK_BUTTON_ARIA_LABEL,e_ as MENU_CLOSE_BUTTON_ARIA_LABEL,CE as MESSAGE_STRIP_CLOSABLE,SE as MESSAGE_STRIP_CLOSE_BUTTON,PE as MESSAGE_STRIP_ERROR,BE as MESSAGE_STRIP_INFORMATION,UE as MESSAGE_STRIP_SUCCESS,DE as MESSAGE_STRIP_WARNING,H_ as MONTH_PICKER_DESCRIPTION,tE as MULTICOMBOBOX_DIALOG_OK_BUTTON,nE as MULTIINPUT_ROLEDESCRIPTION_TEXT,oE as MULTIINPUT_SHOW_MORE_TOKENS,cE as PANEL_ICON,ME as RANGE_SLIDER_ARIA_DESCRIPTION,KE as RANGE_SLIDER_END_HANDLE_DESCRIPTION,GE as RANGE_SLIDER_START_HANDLE_DESCRIPTION,HE as RATING_INDICATOR_TEXT,VE as RATING_INDICATOR_TOOLTIP_TEXT,XE as RESPONSIVE_POPOVER_CLOSE_DIALOG_BUTTON,FE as SEGMENTEDBUTTONITEM_ARIA_DESCRIPTION,WE as SEGMENTEDBUTTON_ARIA_DESCRIBEDBY,YE as SEGMENTEDBUTTON_ARIA_DESCRIPTION,i as SELECT_OPTIONS,z as SELECT_ROLE_DESCRIPTION,ZE as SLIDER_ARIA_DESCRIPTION,F_ as SPLIT_BUTTON_DESCRIPTION,Z_ as SPLIT_BUTTON_KEYBOARD_HINT,Y_ as STEPINPUT_DEC_ICON_TITLE,W_ as STEPINPUT_INC_ICON_TITLE,vE as TABCONTAINER_END_OVERFLOW,fE as TABCONTAINER_NEXT_ICON_ACC_NAME,mE as TABCONTAINER_OVERFLOW_MENU_TITLE,xE as TABCONTAINER_POPOVER_CANCEL_BUTTON,gE as TABCONTAINER_PREVIOUS_ICON_ACC_NAME,hE as TABLE_GROUP_ROW_ARIA_LABEL,eE as TABLE_HEADER_ROW_INFORMATION,lE as TABLE_ROW_POSITION,JE as TAB_ARIA_DESIGN_CRITICAL,uE as TAB_ARIA_DESIGN_NEGATIVE,bE as TAB_ARIA_DESIGN_NEUTRAL,dE as TAB_ARIA_DESIGN_POSITIVE,iE as TEXTAREA_CHARACTERS_EXCEEDED,zE as TEXTAREA_CHARACTERS_LEFT,yE as TIMEPICKER_CANCEL_BUTTON,jE as TIMEPICKER_HOURS_LABEL,QE as TIMEPICKER_INPUT_DESCRIPTION,kE as TIMEPICKER_MINUTES_LABEL,qE as TIMEPICKER_SECONDS_LABEL,wE as TIMEPICKER_SUBMIT_BUTTON,I_ as TOKENIZER_ARIA_CONTAIN_ONE_TOKEN,R_ as TOKENIZER_ARIA_CONTAIN_SEVERAL_TOKENS,A_ as TOKENIZER_ARIA_CONTAIN_TOKEN,O_ as TOKENIZER_ARIA_LABEL,L_ as TOKENIZER_POPOVER_REMOVE,T_ as TOKEN_ARIA_DELETABLE,N_ as TREE_ITEM_ARIA_LABEL,C_ as TREE_ITEM_COLLAPSE_NODE,S_ as TREE_ITEM_EXPAND_NODE,t_ as VALUE_STATE_ERROR,sE as VALUE_STATE_ERROR_ALREADY_SELECTED,n_ as VALUE_STATE_INFORMATION,o_ as VALUE_STATE_SUCCESS,P_ as VALUE_STATE_TYPE_ERROR,B_ as VALUE_STATE_TYPE_INFORMATION,U_ as VALUE_STATE_TYPE_SUCCESS,D_ as VALUE_STATE_TYPE_WARNING,s_ as VALUE_STATE_WARNING,X_ as YEAR_PICKER_DESCRIPTION,l_ as default};