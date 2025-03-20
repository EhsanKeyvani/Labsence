(function(g){var window=this;'use strict';var OzJ=function(z,p){if(!Number.isFinite(z))return String(z);z=String(z);var c=z.indexOf(".");c===-1&&(c=z.length);var B=z[0]==="-"?"-":"";B&&(z=z.substring(1));return B+(0,g.AJJ)("0",Math.max(0,p-c))+z},wb1=function(){return{j:"svg",
C:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},J:[{j:"path",C:{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"}}]}},REJ=function(){return{j:"svg",
C:{fill:"#fff",height:"24px",viewBox:"0 0 24 24",width:"24px"},J:[{j:"path",C:{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"}}]}},$l$=function(z){typeof z==="number"?(this.date=SEQ(z,0,1),Po(this,1)):g.kB(z)?(this.date=SEQ(z.getFullYear(),z.getMonth(),z.getDate()),Po(this,z.getDate())):(this.date=new Date(g.p9()),z=this.date.getDate(),
this.date.setHours(0),this.date.setMinutes(0),this.date.setSeconds(0),this.date.setMilliseconds(0),Po(this,z))},SEQ=function(z,p,c){p=new Date(z,p,c);
z>=0&&z<100&&p.setFullYear(p.getFullYear()-1900);return p},Po=function(z,p){z.getDate()!=p&&z.date.setUTCHours(z.date.getUTCHours()+(z.getDate()<p?1:-1))},A4=function(z,p){g.kG.call(this,z,{j:"div",
B:"ytp-reminder-menu",C:{role:"menu",tabindex:"-1"},J:[{j:"div",B:"ytp-reminder-menu-contents",J:[{j:"div",B:"ytp-reminder-menu-items"}]}]},100,!0);this.W=p;this.D=[];this.menuPopupRenderer=void 0;this.items=this.jp("ytp-reminder-menu-items");this.hide()},KE3=function(z){return(z.menuPopupRenderer&&z.menuPopupRenderer.items||[]).reduce(function(p,c){c&&c.menuServiceItemRenderer&&p.push(c.menuServiceItemRenderer);
return p},[])},O1=function(z){g.Q.call(this,{j:"div",
J:[{j:"button",LH:["ytp-offline-slate-button","ytp-button"],J:[{j:"div",B:"ytp-offline-slate-button-icon",F3:"{{icon}}"},{j:"div",B:"ytp-offline-slate-button-text",F3:"{{text}}"}]}]});this.T=z;this.upcomingEventReminderButtonRenderer=this.toggleButtonRenderer=null;this.K=void 0;this.X=this.W=null;(this.V=this.jp("ytp-offline-slate-button"))&&this.Z(this.V,"click",this.G);this.hide()},asq=function(z,p,c){!z.toggleButtonRenderer&&p&&p.toggleButtonRenderer?z.toggleButtonRenderer=p.toggleButtonRenderer:
p&&p.toggleButtonRenderer||(z.toggleButtonRenderer=null);
!z.upcomingEventReminderButtonRenderer&&c&&g.I(c,u8v)?z.upcomingEventReminderButtonRenderer=g.I(c,u8v):c&&g.I(c,u8v)||(z.upcomingEventReminderButtonRenderer=null);wx(z)},wx=function(z){if(z.toggleButtonRenderer){var p=z.toggleButtonRenderer;
if(p.isToggled){var c=p.toggledText?g.wJ(p.toggledText):"";z.update({text:c,icon:Zzd(p.toggledIcon)})}else c=p.defaultText?g.wJ(p.defaultText):"",z.update({text:c,icon:Zzd(p.defaultIcon)});z.show()}else z.upcomingEventReminderButtonRenderer?(p=LEz(z))?(c=p.text?g.wJ(p.text):"",z.update({text:c,icon:Zzd(p.icon)}),z.show()):z.hide():z.hide()},WEd=function(z,p,c){z.X||(z.X=new g.Ty(z.T.N().mu));
var B={context:g.m2(z.X.config_||g.Yc())};g.Wu()&&(B.context.clientScreenNonce=g.Wu());B.params=c;g.bI(z.X,p,B,{timeout:5E3,onSuccess:function(){z.upcomingEventReminderButtonRenderer&&z.K&&(z.upcomingEventReminderButtonRenderer.currentState=z.K,z.K=void 0)},
onError:function(){dlq(z)},
onTimeout:function(){dlq(z)}})},dlq=function(z){z.toggleButtonRenderer?(z.toggleButtonRenderer.isToggled=!z.toggleButtonRenderer.isToggled,wx(z)):z.upcomingEventReminderButtonRenderer&&(z.K=void 0,wx(z))},Zzd=function(z){if(!z)return null;
switch(z.iconType){case "NOTIFICATIONS":return wb1();case "NOTIFICATIONS_NONE":return REJ();case "NOTIFICATIONS_ACTIVE":return g.dJ();default:return null}},LEz=function(z){if(!z.upcomingEventReminderButtonRenderer)return null;
var p=z.K||z.upcomingEventReminderButtonRenderer.currentState;z=g.m(z.upcomingEventReminderButtonRenderer.states||[]);for(var c=z.next();!c.done;c=z.next())if((c=g.I(c.value,y99))&&c.state===p&&c.button&&g.I(c.button,g.nl))return g.I(c.button,g.nl);return null},CoJ=function(z){g.Q.call(this,{j:"div",
B:"ytp-offline-slate",J:[{j:"div",B:"ytp-offline-slate-background"},{j:"div",B:"ytp-offline-slate-bar",J:[{j:"span",B:"ytp-offline-slate-icon",J:[{j:"svg",C:{fill:"#fff",height:"100%",viewBox:"0 0 24 24",width:"100%"},J:[{j:"path",C:{d:"M16.94 6.91l-1.41 1.45c.9.94 1.46 2.22 1.46 3.64s-.56 2.71-1.46 3.64l1.41 1.45c1.27-1.31 2.05-3.11 2.05-5.09s-.78-3.79-2.05-5.09zM19.77 4l-1.41 1.45C19.98 7.13 21 9.44 21 12.01c0 2.57-1.01 4.88-2.64 6.54l1.4 1.45c2.01-2.04 3.24-4.87 3.24-7.99 0-3.13-1.23-5.96-3.23-8.01zM7.06 6.91c-1.27 1.3-2.05 3.1-2.05 5.09s.78 3.79 2.05 5.09l1.41-1.45c-.9-.94-1.46-2.22-1.46-3.64s.56-2.71 1.46-3.64L7.06 6.91zM5.64 5.45L4.24 4C2.23 6.04 1 8.87 1 11.99c0 3.13 1.23 5.96 3.23 8.01l1.41-1.45C4.02 16.87 3 14.56 3 11.99s1.01-4.88 2.64-6.54z"}},
{j:"circle",C:{cx:"12",cy:"12",r:"3"}}]}]},{j:"span",B:"ytp-offline-slate-messages",J:[{j:"div",B:"ytp-offline-slate-main-text",C:{"aria-label":"{{label}}"},F3:"{{mainText}}"},{j:"div",B:"ytp-offline-slate-subtitle-text",F3:"{{subtitleText}}"}]},{j:"span",B:"ytp-offline-slate-buttons"}]},{j:"button",LH:["ytp-offline-slate-close-button","ytp-button"],J:[g.uZ()]},{j:"button",LH:["ytp-offline-slate-open-button","ytp-button"],J:[g.KB()]}]});var p=this;this.api=z;this.W=this.K=null;this.background=this.jp("ytp-offline-slate-background");
this.D=this.jp("ytp-offline-slate-bar");this.V=new g.B4(function(){g.Eo(p.D,"ytp-offline-slate-bar-fade")},15E3);
this.G=!1;this.X=new g.B4(function(){g.Eo(p.element,"ytp-offline-slate-collapsed")},15E3);
g.l(this,this.X);g.l(this,this.V);this.countdownTimer=new g.B4(this.Cr,1E3,this);this.Z(z,"presentingplayerstatechange",this.b4);this.Z(z,"livestatedata",this.Bq);this.Z(this.jp("ytp-offline-slate-close-button"),"click",function(){g.Eo(p.element,"ytp-offline-slate-collapsed")});
this.Z(this.jp("ytp-offline-slate-open-button"),"click",function(){g.Jn(p.element,"ytp-offline-slate-collapsed")});
this.hide();z=this.getVideoData();z.getPlayerResponse()&&(z=z.getPlayerResponse().playabilityStatus)&&this.Bq(z);z=this.api.getPresentingPlayerType()===8&&!this.getVideoData().gp;var c=this.api.getPresentingPlayerType()===8;g.Yf(this.element,"ytp-offline-slate-premiere-trailer",z);g.Yf(this.element,"ytp-offline-slate-hide-background",c)},eEd=function(z,p,c){if(p){var B=p.subtitleText!=null?g.wJ(p.subtitleText):"";
c=c?c:p.mainText!=null?g.wJ(p.mainText):"";var H,T,b,D;p=(D=(H=p.mainText)==null?void 0:(T=H.accessibility)==null?void 0:(b=T.accessibilityData)==null?void 0:b.label)!=null?D:c;z.update({mainText:c,subtitleText:B,label:p});g.Yf(z.element,"ytp-offline-slate-single-text-line",!B);g.Yf(z.D,"ytp-offline-slate-bar-hidden",!c&&!B)}},Ro=function(z,p){var c=(0,g.y2)();
this.module="heartbeat";this.trigger=z;this.W=p;this.D=c},oX3=function(z){g.Ms.call(this,z);
var p=this;this.G=!1;this.S=0;this.L=!1;this.K=new g.B4(function(){ls9(p)},0);
this.W=this.heartbeatParams=null;this.X=!1;this.V=new g.u4(1E3,6E4,1);this.sequenceNumber=0;this.offlineSlate=null;this.MZ=new g.Ty(void 0);this.attestationResponse=Promise.resolve(void 0);this.U=Promise.resolve(void 0);this.utcOffsetMinutes=-(new $l$).getTimezoneOffset();this.D=new g.or(this);g.l(this,this.K);g.l(this,this.D);vX$(this);Isz(this);this.D.Z(z,"heartbeatparams",this.ag);this.D.Z(z,"presentingplayerstatechange",this.qA);this.D.Z(z,"videoplayerreset",this.YN);this.D.Z(z,g.E5("heartbeat"),
this.onCueRangeEnter);this.X&&this.W&&j$E(this,void 0,this.W);var c=new g.Xq(1E3,0x7ffffffffffff,{priority:1,namespace:"heartbeat"}),B=new g.Xq(0x8000000000000,0x8000000000000,{id:"stream_end",priority:1,namespace:"heartbeat"});z.KN([c,B]);FEq(this)},FEq=function(z){var p=z.getVideoData();
!p.Y("use_rta_for_player")&&p.L3&&(p=p.botguardData)&&g.nk(p,z.player.N())},nXg=function(z){var p,c;
return g.L(function(B){if(B.W==1)return g.a(B,g.KhB(),2);if(!B.K)return z.sequenceNumber>=3?B.return({error:"ATTESTATION_ERROR_VM_INTERNAL_ERROR"}):B.return(void 0);p=z.getVideoData();c={};return B.return(g.$A_((c.cpn=p.clientPlaybackNonce,c.encryptedVideoId=p.videoId||"",c),1500))})},vX$=function(z){var p=z.getVideoData();
if(p.L3)if(p.Y("use_rta_for_player"))z.attestationResponse=nXg(z);else if(p=new g.ZOV(p),g.In.isInitialized()||z.sequenceNumber>=3){var c=Promise,B=c.resolve,H=null;if(p.videoData.Eo){var T=g.LKQ(p);if(T){H={};var b={};T=T.split("&");T=g.m(T);for(var D=T.next();!D.done;D=T.next())D=D.value.split("="),D.length===2&&(b[D[0]]=D[1]);b.r1a&&(H.webResponse=b.r1a);b.r1c&&(H.error=Q$L[Number(b.r1c)]);H.challenge=p.videoData.Eo}}z.attestationResponse=B.call(c,H||void 0)}},r91=function(z){var p=z.getVideoData();
if(!g.$I(z.getVideoData())||p.t3)return!1;if(p.L){z=p.L.flavor==="playready"&&p.Y("html5_innertube_heartbeats_for_playready");var c=p.L.flavor==="widevine"&&p.Y("html5_innertube_heartbeats_for_widevine");p=g.rm(p.L)&&p.Y("html5_innertube_heartbeats_for_fairplay");return!(z||c||p)}return!0},Ulg=function(z){if(r91(z))return!!z.heartbeatParams;
var p=z.getVideoData();return!g.$I(z.getVideoData())||p.Rz||p.D3?!!p.heartbeatToken:!1},Sm=function(z,p){if(!z.K.isActive()&&z.G){var c=z.getVideoData();
if(Ulg(z)||c.isLivePlayback){if(p===void 0)if(z.L)if(z.X)p=7500;else{var B;p=((B=z.heartbeatParams)==null?0:B.interval)?z.heartbeatParams.interval*1E3:z.getVideoData().Ab||6E4}else p=1E3;z.K.start(p)}}},GBv=function(z,p,c){p.wh&&(c=g.g6(c,{internalipoverride:p.wh}));
var B={cpn:p.clientPlaybackNonce};p.contextParams&&(B.context_params=p.contextParams);p.RR&&(B.kpt=p.RR);c=g.g6(c,B);g.dS(c,{format:"RAW",method:"GET",timeout:3E4,onSuccess:function(H){if(!z.K.isActive()&&$s(z)){z.V.reset();z.sequenceNumber++;H=H.responseText;var T=s$L(H);if(T){z.player.AD("onHeartbeat",T);var b=T.status==="ok"?T.stop_heartbeat?2:0:T.status==="stop"?1:T.status==="live_stream_offline"?0:-1}else b=(b=H.match(kB3))?b[1]==="0"?0:1:-1;gXl(z,void 0,T,H,b)}},
onError:function(H){$s(z)&&Ks(z,!0,"net-"+H.status)},
onTimeout:function(){$s(z)&&Ks(z,!0,"timeout")},
withCredentials:!0})},ls9=function(z){var p,c;
g.L(function(B){p=z.player.N();c=z.getVideoData();if(!$s(z))return B.return();if(r91(z))return NNQ(z,p,c),B.hD(0);vX$(z);return g.a(B,fsQ(z,p,c),0)})},NNQ=function(z,p,c){var B;
if((B=z.heartbeatParams)!=null&&B.url){var H=g.g6(z.heartbeatParams.url,{request_id:g.LIE()});c.Dt&&(H=g.g6(H,{vvt:c.Dt}),c.mdxEnvironment&&(H=g.g6(H,{mdx_environment:c.mdxEnvironment})));g.tj(p,c.oauthToken).then(function(T){T&&(H=g.g6(H,{access_token:T}));GBv(z,c,H)})}},$s=function(z){var p=z.getVideoData();
return z.player.getPresentingPlayerType()===3||g.r(z.player.getPlayerStateObject(z.getPlayerType()),4)?!1:Ulg(z)||p.isLivePlayback?!0:(uw(z),!1)},fsQ=function(z,p,c){var B,H,T,b,D,t,X,x,E,q,J,M,P,O,R,K,Z,W,v,zY;
return g.L(function(U){if(U.W==1)return B="player/heartbeat",T={videoId:c.videoId,sequenceNumber:z.sequenceNumber,heartbeatServerData:(H=z.Dt)!=null?H:c.heartbeatServerData},z.U=z.attestationResponse,c.L3?g.a(U,z.U,3):U.hD(2);U.W!=2&&(T.attestationResponse=U.K);b=g.xG(c);t=(D=b.client)!=null?D:{};t.utcOffsetMinutes=z.utcOffsetMinutes;T.context=b;T.cpn=c.clientPlaybackNonce;if(X=typeof Intl!=="undefined"?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)t.timeZone=X;x={heartbeatChecks:[]};
if(E=c.getPlayerResponse())c.heartbeatToken&&(T.heartbeatToken=c.heartbeatToken),(q=E.playabilityStatus)&&(J=q.liveStreamability)&&J.liveStreamabilityRenderer&&x.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_LIVE_STREAM_STATUS");c.heartbeatToken&&x.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_YPC");g.d9(p)&&(x.heartbeatChecks.push("HEARTBEAT_CHECK_TYPE_UNPLUGGED"),M=zPl(z),P={},M!==null&&(P.clientPlayerPositionUtcMillis=M),R=(O=z.player.mU())==null?void 0:g.uQ(O),Z=((K=R)==null?void 0:K.freePreviewWatchedDuration)||
0,Z>0&&(P.freePreviewWatchedDuration={seconds:""+Z}),x.unpluggedParams=P);T.heartbeatRequestParams=x;c.isLivePlayback?(W=zPl(z),W!==null&&(T.playbackState||(T.playbackState={}),T.playbackState.playbackPosition={utcTimeMillis:W})):p.Y("enable_heartbeat_vod_playback_position")&&(v=pFJ(z),v!==null&&(T.playbackState||(T.playbackState={}),T.playbackState.playbackPosition={streamTimeMillis:v}));z.player.publish("heartbeatRequest",T);zY={timeout:3E4,onSuccess:function(HD){if(!z.K.isActive()&&$s(z)){var VW=
z.getVideoData(),f=VW.L3&&z.U==null,F;VW.L3=!((F=HD.heartbeatAttestationConfig)==null||!F.requiresAttestation)||f;f=HD.playabilityStatus;F=JSON.stringify(f)||"{}";HD.authenticationMismatch&&z.player.KH("authshear",{});var N=-1;var h=HD.playabilityStatus;h&&(z.player.AD("onHeartbeat",h),h.status==="OK"?N=HD.stopHeartbeat?2:0:h.status==="UNPLAYABLE"?N=1:h.status==="LIVE_STREAM_OFFLINE"&&(N=0));z.sequenceNumber&&N===-1||z.V.reset();z.sequenceNumber++;HD.heartbeatServerData&&(z.Dt=HD.heartbeatServerData);
VW.gT=HD;(h=HD.playerCueRangeSet)&&g.Bf(VW,h);HD.playerCueRanges&&HD.playerCueRanges.length>0&&(VW.cueRanges=HD.playerCueRanges);var n,FY;((n=HD.progressBarConfig)==null?0:n.progressBarStartPosition)&&((FY=HD.progressBarConfig)==null?0:FY.progressBarEndPosition)&&(VW.progressBarStartPosition=HD.progressBarConfig.progressBarStartPosition,VW.progressBarEndPosition=HD.progressBarConfig.progressBarEndPosition);VW.compositeLiveIngestionOffsetToken=HD.compositeLiveIngestionOffsetToken;HD.compositeLiveStatusToken!==
VW.compositeLiveStatusToken&&(VW.compositeLiveStatusToken=HD.compositeLiveStatusToken);VW.publish("dataupdated");gXl(z,HD,f,F,N)}},
onError:function(HD){$s(z)&&Ks(z,!0,"net-"+HD.status)},
onTimeout:function(){$s(z)&&Ks(z,!0,"timeout")}};
g.tj(p,g.se(c)).then(function(HD){HD&&(zY.Y4="Bearer "+HD);g.bI(z.MZ,B,T,zY)});
g.Ai(U)})},gXl=function(z,p,c,B,H){H===-1?(c="decode "+g.Pe(B,3),Ks(z,!1,c)):H===2?(uw(z),z.L=!0):(z.S=0,z.K.stop(),H===1?(z.L=!1,c&&c.errorCode==="PLAYABILITY_ERROR_CODE_EMBARGOED"&&z.player.zx(!0),H="pe."+(c==null?void 0:c.errorCode)+";ps."+(c==null?void 0:c.status),z.player.OI("heartbeat.stop",2,z.Tg(B),H),g.MG("heartbeatActionPlayerHalted",cev(c)),(p==null?0:p.videoTransitionEndpoint)&&c&&(p=p.videoTransitionEndpoint,(B=g.I(p,g.ir))&&BI$(z,B,c,{itct:p==null?void 0:p.clickTrackingParams}))):(z.L=
!0,B=0,z.X&&c&&(B=j$E(z,p,c),z.player.publish("livestatedata",c)),B?Sm(z,B):Sm(z)))},j$E=function(z,p,c){var B=c.liveStreamability&&c.liveStreamability.liveStreamabilityRenderer,H=!(!B||!(B.switchStreamsImmediately||B.transitionTiming&&B.transitionTiming==="STREAM_TRANSITION_TIMING_IMMEDIATELY"));
p=HD3(z,p,B);var T=z.getVideoData(),b=z.player.getPlayerStateObject(z.getPlayerType()),D=b.isPlaying()&&!g.yN(T)&&!z.player.isAtLiveHead(z.getPlayerType());if(T.N().OW()){var t,X=((t=z.player.h1())==null?void 0:t.kt())||{};X.status=c.status||"";X.dvr=""+ +D;X["switch"]=""+ +H;X.ended=""+ +!(!B||!B.displayEndscreen);z.player.KH("heartbeat",X)}if(D&&!H)return p;H=B&&B.streamTransitionEndpoint&&g.I(B.streamTransitionEndpoint,g.ir);if((B&&B.transitionTiming)==="STREAM_TRANSITION_TIMING_AT_STREAM_END")z.getVideoData().transitionEndpointAtEndOfStream=
H;else if(H&&BI$(z,H,c))return p;if(c.status.toUpperCase()==="OK"){H=B&&B.broadcastId;t=z.W&&z.W.liveStreamability&&z.W.liveStreamability.liveStreamabilityRenderer&&z.W.liveStreamability.liveStreamabilityRenderer.broadcastId;D=H!==t&&H!=null;if(!g.Zt(T)||D){var x={video_id:T.videoId};T.SM&&(x.is_live_destination="1");x.disable_watch_next=!0;x.raw_watch_next_response=T.getWatchNextResponse();x.autonav_state=T.autonavState;x.oauth_token=T.oauthToken;x.force_gvi=T.dh;x.Dg=T.Dg;T.V&&(x.vss_credentials_token=
T.V,x.vss_credentials_token_type=T.x8);T.Dt&&(x.vvt=T.Dt);B=void 0;g.Zt(T)?D&&(B=new Ro("broadcastIdChanged",t+","+H),z.ST("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE","HEARTBEAT_ACTION_TRANSITION_REASON_BROADCAST_ID_CHANGED",c)):(H&&(B=new Ro("formatsReceived",""+H)),z.ST("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE","HEARTBEAT_ACTION_TRANSITION_REASON_LIVE_STREAM_WENT_ONLINE",c));z.player.loadVideoByPlayerVars(x,void 0,void 0,void 0,B);return p}z.player.tv("heartbeat",z.getPlayerType())}B&&B.displayEndscreen&&(z.offlineSlate?
(z=z.offlineSlate,z.G=!0,z.EH&&z.api.al()):b.isBuffering()&&(T=((x=z.player.h1())==null?void 0:x.kt())||{},z.player.KH("hbse",T,!0),z.player.al(),z.player.AD("onLiveMediaEnded",c)));return p},HD3=function(z,p,c){return z.player.Y("web_player_use_heartbeat_poll_delay_ms")&&(z=Number(p==null?void 0:p.pollDelayMs))?z:(c=Number(c==null?void 0:c.pollDelayMs))?c:0},Ks=function(z,p,c){var B=z.player.N();
if(!z.K.isActive()){z.K.stop();z.S++;var H=p?"heartbeat.net":"heartbeat.servererror";var T=z.getVideoData();if(T.H9||p&&!g.$I(z.getVideoData())&&!Ulg(z)&&T.isLivePlayback)T=!1;else{var b,D;((D=z.heartbeatParams)==null?0:D.retries)?b=z.heartbeatParams.retries:b=T.b3||5;T=z.S>=b}T?(g.MG("heartbeatActionPlayerHalted",p?{enforcedPolicyToHaltOnNetworkFailure:!0}:cev()),(p=z.getVideoData())&&p.isLivePlayback?z.player.OI(H,1,"Video playback interrupted. Please try again.",c):z.player.OI(H,1,"Sorry, there was an error licensing this video.",
c)):(B.Y("html5_report_non_fatal_heartbeat_error")&&z.player.h4(H,{msg:c}),Sm(z,z.V.getValue()),g.az(z.V))}},cev=function(z){var p={enforcedPolicyToHaltOnNetworkFailure:!1};
z&&(p.serializedServerContext=z.additionalLoggingData);return p},uw=function(z){z.S=0;
z.K.stop();z.L=!1;z.sequenceNumber=0},Isz=function(z){var p=z.getVideoData(),c=z.player.N();
if(p.isLivePlayback)if(g.VB(c.L)){z.X=!0;z.G=!0;if(!g.yi(c)||g.d9(c))z.offlineSlate=new CoJ(z.player),g.l(z,z.offlineSlate),g.F7(z.player,z.offlineSlate.element,4);(p=p.getPlayerResponse())&&p.playabilityStatus&&(z.W=p.playabilityStatus);var B;((B=z.W)==null?void 0:B.status)!=="UNPLAYABLE"&&(z.W?(B=HD3(z,void 0,z.W.liveStreamability&&z.W.liveStreamability.liveStreamabilityRenderer))?Sm(z,B):Sm(z,7500):Sm(z,1E3))}else z.player.OI("html5.unsupportedlive",2,"HTML5_NO_AVAILABLE_FORMATS_FALLBACK","nolive.1");
else g.Gv(p.tD,"heartbeat")&&z.player.tv("heartbeat",z.getPlayerType())},BI$=function(z,p,c,B){var H=p&&p.videoId;
return H?(z.player.oH(H,Object.assign({},{autonav:"1"},B||{}),void 0,!0,!0,p,g.se(z.getVideoData())),z.ST("HEARTBEAT_ACTION_TRIGGER_IMMEDIATE","HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT",c),!0):!1},zPl=function(z){return(z=z.player.getProgressState(z.getPlayerType()).ingestionTime)&&isFinite(z)?""+Math.floor(z*1E3):null},pFJ=function(z){return(z=z.player.getCurrentTime(z.getPlayerType()))&&isFinite(z)?""+Math.floor(z*1E3):null},s$L=function(z){try{var p=JSON.parse(z);
return p!=null?p:void 0}catch(c){}},iD1={ERAS:["BC",
"AD"],ERANAMES:["Before Christ","Anno Domini"],NARROWMONTHS:"JFMAMJJASOND".split(""),STANDALONENARROWMONTHS:"JFMAMJJASOND".split(""),MONTHS:"January February March April May June July August September October November December".split(" "),STANDALONEMONTHS:"January February March April May June July August September October November December".split(" "),SHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONESHORTMONTHS:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
WEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),STANDALONEWEEKDAYS:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),STANDALONESHORTWEEKDAYS:"Sun Mon Tue Wed Thu Fri Sat".split(" "),NARROWWEEKDAYS:"SMTWTFS".split(""),STANDALONENARROWWEEKDAYS:"SMTWTFS".split(""),SHORTQUARTERS:["Q1","Q2","Q3","Q4"],QUARTERS:["1st quarter","2nd quarter","3rd quarter","4th quarter"],AMPMS:["AM","PM"],DATEFORMATS:["EEEE, MMMM d, y",
"MMMM d, y","MMM d, y","M/d/yy"],TIMEFORMATS:["h:mm:ss\u202fa zzzz","h:mm:ss\u202fa z","h:mm:ss\u202fa","h:mm\u202fa"],DATETIMEFORMATS:["{1} 'at' {0}","{1} 'at' {0}","{1}, {0}","{1}, {0}"],FIRSTDAYOFWEEK:6,WEEKENDRANGE:[5,6],FIRSTWEEKCUTOFFDAY:5},TI3=iD1;TI3=iD1;
var Q$L=["ATTESTATION_ERROR_UNKNOWN","ATTESTATION_ERROR_VM_NOT_INITIALIZED","ATTESTATION_ERROR_VM_NO_RESPONSE","ATTESTATION_ERROR_VM_TIMEOUT","ATTESTATION_ERROR_VM_INTERNAL_ERROR"],bDg={300:"STREAMING_DEVICES_QUOTA_PER_24H_EXCEEDED",301:"ALREADY_PINNED_ON_A_DEVICE",303:"STOPPED_BY_ANOTHER_PLAYBACK",304:"TOO_MANY_STREAMS_PER_USER",305:"TOO_MANY_STREAMS_PER_ENTITLEMENT",400:"VIDEO_NOT_FOUND",401:"GEO_FAILURE",402:"STREAMING_NOT_ALLOWED",403:"UNSUPPORTED_DEVICE",405:"VIDEO_FORBIDDEN",500:"PURCHASE_NOT_FOUND",
501:"RENTAL_EXPIRED",502:"PURCHASE_REFUNDED",5E3:"BAD_REQUEST",5001:"CGI_PARAMS_MISSING",5002:"CGI_PARAMS_MALFORMED",5100:"AUTHENTICATION_MISSING",5101:"AUTHENTICATION_MALFORMED",5102:"AUTHENTICATION_EXPIRED",5200:"CAST_TOKEN_MALFORMED",5201:"CAST_TOKEN_EXPIRED",5202:"CAST_TOKEN_FAILED",5203:"CAST_SESSION_VIDEO_MISMATCHED",5204:"CAST_SESSION_DEVICE_MISMATCHED",6E3:"INVALID_DRM_MESSAGE",7E3:"SERVER_ERROR",8E3:"RETRYABLE_ERROR"};g.V=$l$.prototype;g.V.Zx=TI3.FIRSTDAYOFWEEK;g.V.SV=TI3.FIRSTWEEKCUTOFFDAY;
g.V.clone=function(){var z=new $l$(this.date);z.Zx=this.Zx;z.SV=this.SV;return z};
g.V.getFullYear=function(){return this.date.getFullYear()};
g.V.getYear=function(){return this.getFullYear()};
g.V.getMonth=function(){return this.date.getMonth()};
g.V.getDate=function(){return this.date.getDate()};
g.V.getTime=function(){return this.date.getTime()};
g.V.getDay=function(){return this.date.getDay()};
g.V.getUTCFullYear=function(){return this.date.getUTCFullYear()};
g.V.getUTCMonth=function(){return this.date.getUTCMonth()};
g.V.getUTCDate=function(){return this.date.getUTCDate()};
g.V.getUTCDay=function(){return this.date.getDay()};
g.V.getUTCHours=function(){return this.date.getUTCHours()};
g.V.getUTCMinutes=function(){return this.date.getUTCMinutes()};
g.V.getTimezoneOffset=function(){return this.date.getTimezoneOffset()};
g.V.set=function(z){this.date=new Date(z.getFullYear(),z.getMonth(),z.getDate())};
g.V.setFullYear=function(z){this.date.setFullYear(z)};
g.V.setYear=function(z){this.setFullYear(z)};
g.V.setMonth=function(z){this.date.setMonth(z)};
g.V.setDate=function(z){this.date.setDate(z)};
g.V.setTime=function(z){this.date.setTime(z)};
g.V.setUTCFullYear=function(z){this.date.setUTCFullYear(z)};
g.V.setUTCMonth=function(z){this.date.setUTCMonth(z)};
g.V.setUTCDate=function(z){this.date.setUTCDate(z)};
g.V.add=function(z){if(z.years||z.months){var p=this.getMonth()+z.months+z.years*12,c=this.getYear()+Math.floor(p/12);p%=12;p<0&&(p+=12);a:{switch(p){case 1:var B=c%4!=0||c%100==0&&c%400!=0?28:29;break a;case 5:case 8:case 10:case 3:B=30;break a}B=31}B=Math.min(B,this.getDate());this.setDate(1);this.setFullYear(c);this.setMonth(p);this.setDate(B)}z.days&&(c=this.getYear(),p=c>=0&&c<=99?-1900:0,z=new Date((new Date(c,this.getMonth(),this.getDate(),12)).getTime()+z.days*864E5),this.setDate(1),this.setFullYear(z.getFullYear()+
p),this.setMonth(z.getMonth()),this.setDate(z.getDate()),Po(this,z.getDate()))};
g.V.oI=function(z){return!(!z||this.getYear()!=z.getYear()||this.getMonth()!=z.getMonth()||this.getDate()!=z.getDate())};
g.V.toString=function(){var z=this.getFullYear(),p=z<0?"-":z>=1E4?"+":"";return[p+OzJ(Math.abs(z),p?6:4),OzJ(this.getMonth()+1,2),OzJ(this.getDate(),2)].join("")+""};
g.V.valueOf=function(){return this.date.valueOf()};var VLK=new g.Wn("addUpcomingEventReminderEndpoint");var D7d=new g.Wn("removeUpcomingEventReminderEndpoint");var tLE=new g.Wn("updateUpcomingEventReminderButtonStateCommand");var u8v=new g.Wn("upcomingEventReminderButtonRenderer"),y99=new g.Wn("upcomingEventReminderButtonStateRenderer");g.Y(A4,g.kG);
A4.prototype.updateMenuItems=function(){var z=this,p=KE3(this),c=0;c=0;for(var B={};c<p.length;B={D4:void 0},c++){var H=this.D[c];H||(H=new g.Q({j:"div",B:"ytp-reminder-menu-item",C:{role:"menuitem",tabindex:"0"},J:[{j:"div",B:"ytp-reminder-menu-item-icon",F3:"{{icon}}"},{j:"div",B:"ytp-reminder-menu-item-label",F3:"{{text}}"}]}),B.D4=c,H.listen("click",function(b){return function(){var D=b.D4;z.uQ();D=KE3(z)[D];z.publish("reminderMenuItemClicked",D.serviceEndpoint||D.command)}}(B)),H.Ia(this.items),
this.D[c]=H);
var T=p[c];B=null;switch(T.icon&&T.icon.iconType){case "NOTIFICATIONS":B=wb1();break;case "NOTIFICATIONS_NONE":B=REJ();break;case "NOTIFICATIONS_ACTIVE":B=g.dJ()}T=T.text?g.wJ(T.text):"";H.update({icon:B,text:T})}for(;c<this.D.length;)this.D.pop().dispose();c===0?this.uQ():this.S_(this.W)};
A4.prototype.hide=function(){this.W&&this.W.removeAttribute("aria-haspopup");g.kG.prototype.hide.call(this)};
A4.prototype.show=function(){this.W&&this.W.setAttribute("aria-haspopup","true");g.kG.prototype.show.call(this)};
A4.prototype.m0=function(){g.tJ(this.D);g.kG.prototype.m0.call(this)};g.Y(O1,g.Q);
O1.prototype.G=function(){if(this.toggleButtonRenderer){var z=this.toggleButtonRenderer;z.isToggled?this.D(z.toggledServiceEndpoint):this.D(z.defaultServiceEndpoint);z.isToggled=!z.isToggled;wx(this)}else if(this.upcomingEventReminderButtonRenderer)if(this.W&&this.W.EH)this.W.uQ();else{var p=LEz(this);p&&this.D(p.serviceEndpoint||p.command);p=((z=g.I(p==null?void 0:p.command,g.ST))==null?void 0:z.commands)||[];a:{z=g.m(p);for(var c=z.next();!c.done;c=z.next()){var B=p=void 0;if(c=(p=g.I(c.value,g.Lrm))==
null?void 0:(B=p.popup)==null?void 0:B.menuPopupRenderer){z=c;break a}}z=void 0}this.W||(this.W=new A4(this.T,this.V),this.W.Ia(this.element),g.l(this,this.W),this.W.subscribe("reminderMenuItemClicked",this.D,this));p=this.W;p.menuPopupRenderer=z;p.updateMenuItems()}};
O1.prototype.D=function(z){var p=g.I(z,VLK),c=g.I(z,D7d);if(z&&(p||c)){if(p){var B=p;var H="notification/add_upcoming_event_reminder"}else c&&(B=c,H="notification/remove_upcoming_event_reminder");if(H&&B&&B.params)for(WEd(this,H,B.params),z=g.m(B.commands||[]),p=z.next();!p.done;p=z.next())if((p=p.value)&&g.I(p,tLE)){this.K=g.I(p,tLE).state;wx(this);break}}};g.Y(CoJ,g.Q);g.V=CoJ.prototype;g.V.getPlayerType=function(){if(this.api.getPresentingPlayerType()===8)return 1};
g.V.getVideoData=function(){return this.api.getVideoData(this.getPlayerType())};
g.V.Bq=function(z){var p,c,B=z==null?void 0:(p=z.liveStreamability)==null?void 0:(c=p.liveStreamabilityRenderer)==null?void 0:c.offlineSlate;if(B){this.K=z;p=B.liveStreamOfflineSlateRenderer;p.canShowCountdown?this.Cr():eEd(this,p);var H,T,b,D;if(c=z==null?void 0:(H=z.liveStreamability)==null?void 0:(T=H.liveStreamabilityRenderer)==null?void 0:(b=T.offlineSlate)==null?void 0:(D=b.liveStreamOfflineSlateRenderer)==null?void 0:D.thumbnail){H=0;T=null;b=c.thumbnails;for(D=0;D<b.length;D++)b[D].width>
H&&(H=b[D].width||0,T=b[D].url);T&&(this.background.style.backgroundImage="url("+T+")")}else this.background.style.backgroundImage="";p.actionButtons||p.reminderButton?(this.W||(this.W=new O1(this.api),this.W.Ia(this.jp("ytp-offline-slate-buttons")),g.l(this,this.W)),asq(this.W,p.actionButtons&&p.actionButtons[0],p.reminderButton)):this.W&&asq(this.W,null,null);this.K=z}else this.K=null;this.b4()};
g.V.b4=function(z){if(this.api.getPresentingPlayerType()===8)var p=!0;else{var c=this.api.getPlayerStateObject(),B=this.getVideoData();p=B.isLivePlayback&&(c.isBuffering()||g.r(c,2)||g.r(c,64));var H=B.autonavState===2&&g.r(c,2);c=c.isPlaying()&&!g.yN(B)&&!this.api.isAtLiveHead(void 0,!0);p=p&&!c&&!H}p&&this.K?this.EH?(z==null?0:g.wn(z,2))&&!this.getVideoData().gp&&(g.Jn(this.element,"ytp-offline-slate-collapsed"),this.X.stop(),g.Jn(this.D,"ytp-offline-slate-bar-fade"),this.V.start()):(this.show(),
this.X.start(),this.api.publish("offlineslatestatechange"),this.G&&this.api.al()):this.EH&&(this.hide(),this.api.publish("offlineslatestatechange"))};
g.V.Cr=function(){var z,p,c,B,H=(z=this.K)==null?void 0:(p=z.liveStreamability)==null?void 0:(c=p.liveStreamabilityRenderer)==null?void 0:(B=c.offlineSlate)==null?void 0:B.liveStreamOfflineSlateRenderer;H&&(z=Math.floor(g.p9()/1E3),p=H.canShowCountdown&&Number(H.scheduledStartTime),!p||p<=z?(eEd(this,H),this.countdownTimer.stop()):(eEd(this,H,g.dn(p-z)),g.H4(this.countdownTimer)))};
g.V.m0=function(){this.countdownTimer.dispose();this.countdownTimer=null;g.Q.prototype.m0.call(this)};Ro.prototype.K=function(z){return this.trigger&&z.trigger?this.module===z.module&&this.trigger===z.trigger&&this.W===z.W:!1};
Ro.prototype.isExpired=function(){return(0,g.y2)()-this.D>6E4};
Ro.prototype.toString=function(){return this.module+":"+this.trigger+":"+this.W};g.Y(oX3,g.Ms);g.V=oX3.prototype;g.V.m0=function(){uw(this);this.player.gs("heartbeat");g.Ms.prototype.m0.call(this)};
g.V.onCueRangeEnter=function(){this.G=!0;Sm(this,2E3)};
g.V.ag=function(z){this.heartbeatParams=z;Sm(this,2E3)};
g.V.qA=function(z){var p;this.player.getPresentingPlayerType()!==8&&((p=this.W)==null?void 0:p.status)!=="UNPLAYABLE"&&(g.r(z.state,2)||g.r(z.state,64)?(uw(this),this.X&&(this.G=!0,Sm(this,1E3))):(g.r(z.state,1)||g.r(z.state,8))&&Sm(this,2E3))};
g.V.YN=function(){this.player.getPresentingPlayerType()!==3&&Sm(this,2E3)};
g.V.getPlayerType=function(){if(this.player.getPresentingPlayerType()===8)return 1};
g.V.getVideoData=function(){return this.player.getVideoData(this.getPlayerType())};
g.V.Ln=function(z){switch(z){case 4:case 3:return!1}return!0};
g.V.ST=function(z,p,c){z={trigger:z,reason:p};c&&(z.serializedServerContext=c.additionalLoggingData);g.MG("heartbeatActionPlayerTransitioned",z)};
g.V.Tg=function(z){var p="LICENSE",c=s$L(z);if(c)return c.reason||g.vc[p]||"";if(z=z.match(kB3))if(z=Number(z[1]))p=(p=bDg[z.toString()])?p:"LICENSE";return g.vc[p]||""};
g.V.Ek=function(){return!!this.offlineSlate&&this.offlineSlate.EH};
var kB3=/^GLS\/1.0 (\d+) (\w+).*?\r\n\r\n([\S\s]*)$/;g.JV("heartbeat",oX3);})(_yt_player);
