(ns bingo.core
  (:require [clojure.browser.repl :as repl]
            [rum]))

;; (defonce conn
;;   (repl/connect "http://localhost:9000/repl"))

;; (Enable-console-print!)

;; (println "Hello world!")

;; Dom Utilities
(defn el [id] (js/document.getElementById id))

;; Model
(defrecord Entry [id phrase points spoken?])

(defrecord Model [entries phrase-input points-input])

(def id (atom 0))

;; String -> Int -> Entry.
(defn new-entry [phrase points]
    (Entry. (swap! id inc) phrase points false))

(def initial-model
  (Model.
   (list (new-entry "Doing Agile" 200)
         (new-entry "In the Cloud" 300)
         (new-entry "Future Proof" 100)
         (new-entry "Rock Star Ninja" 400))
   ""
   ""
   )) 

;; (def state (atom initial-model))

;; Int -> Model -> Model
(defn delete-entry
  [id entries]
  (filter #(not= (:id %) id) entries))

;; '(Entry) -> '(Entry)
(defn sort-entries
  "sort entries by points"
  [entries]
  (sort-by :points entries))

;; View

;; Page Header
;; Int -> String -> Html
(rum/defc page-header [n text]
  [:h1 (repeat n text)])


(let [mount-el (el "page-header")]
  (rum/mount (page-header 3 "Bingo!") mount-el))


(defn reset-entries
 "update entries by applying the supplied functon
  name when a reaction occurs"
 [function state ]
 (reset! state (Model. function
                       (:phrase-input @state)
                       (:points-input @state))))

;; Entry -> Html
(rum/defc entry-item < rum/static
  [entry state]
  [:li 
   [:span {:class "phrase"} (:phrase entry)]
   [:span {:class "points"} (:points entry)]
   [:button {:class "delete"
             :on-click (fn [_] (reset-entries
                                (delete-entry (:id entry) (:entries @state))
                                state))}]])


(rum/defc entry-list < rum/static
  [entries state]
  [:ul
     (for [entry entries]
       (rum/with-props entry-item entry state :rum/key [entry]))
   ])


(rum/defc add-sort-button < rum/static
  [text state]
  [:button {:name "sort" :class "sort"
            :on-click (fn [_] (reset-state
                               (sort-entries (:entries @state)) state))}
   text])

(rum/defcs view < (rum/local initial-model) [state]
  (let [local (:rum/local state)
        entries (:entries @local)]
    [:div {:id "container"}
     (rum/with-props entry-list entries local :rum/key ["list"])
     (rum/with-props add-sort-button "Sort" local :rum/key ["sort"])
    ]))
    

(let [mount-el (el "view")]
  (rum/mount (view) mount-el))
  
;; Page Footer
;; String -> String -> Html
(rum/defc page-footer [link text]
  [:a {:href link} text])

(let [mount-el (el "page-footer")]
  (rum/mount
    (page-footer "http://github.com/adkelley/bingo-cljs" "Alex Kelley") mount-el))
