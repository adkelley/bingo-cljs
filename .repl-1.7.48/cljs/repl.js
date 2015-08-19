// Compiled by ClojureScript 1.7.48 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__8543_8557 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8544_8558 = null;
var count__8545_8559 = (0);
var i__8546_8560 = (0);
while(true){
if((i__8546_8560 < count__8545_8559)){
var f_8561 = cljs.core._nth.call(null,chunk__8544_8558,i__8546_8560);
cljs.core.println.call(null,"  ",f_8561);

var G__8562 = seq__8543_8557;
var G__8563 = chunk__8544_8558;
var G__8564 = count__8545_8559;
var G__8565 = (i__8546_8560 + (1));
seq__8543_8557 = G__8562;
chunk__8544_8558 = G__8563;
count__8545_8559 = G__8564;
i__8546_8560 = G__8565;
continue;
} else {
var temp__4425__auto___8566 = cljs.core.seq.call(null,seq__8543_8557);
if(temp__4425__auto___8566){
var seq__8543_8567__$1 = temp__4425__auto___8566;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8543_8567__$1)){
var c__2013__auto___8568 = cljs.core.chunk_first.call(null,seq__8543_8567__$1);
var G__8569 = cljs.core.chunk_rest.call(null,seq__8543_8567__$1);
var G__8570 = c__2013__auto___8568;
var G__8571 = cljs.core.count.call(null,c__2013__auto___8568);
var G__8572 = (0);
seq__8543_8557 = G__8569;
chunk__8544_8558 = G__8570;
count__8545_8559 = G__8571;
i__8546_8560 = G__8572;
continue;
} else {
var f_8573 = cljs.core.first.call(null,seq__8543_8567__$1);
cljs.core.println.call(null,"  ",f_8573);

var G__8574 = cljs.core.next.call(null,seq__8543_8567__$1);
var G__8575 = null;
var G__8576 = (0);
var G__8577 = (0);
seq__8543_8557 = G__8574;
chunk__8544_8558 = G__8575;
count__8545_8559 = G__8576;
i__8546_8560 = G__8577;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_8578 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__1229__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__1229__auto__)){
return or__1229__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_8578);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_8578)))?cljs.core.second.call(null,arglists_8578):arglists_8578));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__8547 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__8548 = null;
var count__8549 = (0);
var i__8550 = (0);
while(true){
if((i__8550 < count__8549)){
var vec__8551 = cljs.core._nth.call(null,chunk__8548,i__8550);
var name = cljs.core.nth.call(null,vec__8551,(0),null);
var map__8552 = cljs.core.nth.call(null,vec__8551,(1),null);
var map__8552__$1 = ((((!((map__8552 == null)))?((((map__8552.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8552.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8552):map__8552);
var doc = cljs.core.get.call(null,map__8552__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8552__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8579 = seq__8547;
var G__8580 = chunk__8548;
var G__8581 = count__8549;
var G__8582 = (i__8550 + (1));
seq__8547 = G__8579;
chunk__8548 = G__8580;
count__8549 = G__8581;
i__8550 = G__8582;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8547);
if(temp__4425__auto__){
var seq__8547__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8547__$1)){
var c__2013__auto__ = cljs.core.chunk_first.call(null,seq__8547__$1);
var G__8583 = cljs.core.chunk_rest.call(null,seq__8547__$1);
var G__8584 = c__2013__auto__;
var G__8585 = cljs.core.count.call(null,c__2013__auto__);
var G__8586 = (0);
seq__8547 = G__8583;
chunk__8548 = G__8584;
count__8549 = G__8585;
i__8550 = G__8586;
continue;
} else {
var vec__8554 = cljs.core.first.call(null,seq__8547__$1);
var name = cljs.core.nth.call(null,vec__8554,(0),null);
var map__8555 = cljs.core.nth.call(null,vec__8554,(1),null);
var map__8555__$1 = ((((!((map__8555 == null)))?((((map__8555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__8555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8555):map__8555);
var doc = cljs.core.get.call(null,map__8555__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__8555__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__8587 = cljs.core.next.call(null,seq__8547__$1);
var G__8588 = null;
var G__8589 = (0);
var G__8590 = (0);
seq__8547 = G__8587;
chunk__8548 = G__8588;
count__8549 = G__8589;
i__8550 = G__8590;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});
