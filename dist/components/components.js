Vue.component('Definition',{
    template: '<div class="definition">' +
        '<h4>Definition (<defn :id="defName">{{ name }}</defn>)</h4>' +
        '<p><slot></slot></p>' +
        '</div>',
    props: ['name'],
    data() {
        return {
            defName: 'def-' + this.$props.name,
        }
    }
})

Vue.component('Folgerung',{
    template: '<div class="folgerung">' +
            '<h4>Folgerung</h4>' +
            '<p><slot></slot></p>' +
        '</div>'
})

Vue.component('Aufgabe',{
    template: '<div class="aufgabe"><h4>Aufgabe</h4><p><slot></slot></p></div>'
})

Vue.component('Hinweis',{
    template: '<div class="hinweis">\n' +
        '    <button class="smallbutton" @click="schalteHinweis">Hinweis</button>\n' +
        '    <div v-if="zeigeHinweis">\n' +
        '      <h4>Hinweis</h4>\n' +
        '      <p><slot></slot></p>\n' +
        '    </div>\n' +
        '  </div>',
    data() {
        return {
            zeigeHinweis: false,
        }
    },
    methods: {
        schalteHinweis(){
            this.zeigeHinweis = !this.zeigeHinweis
        }
    }
})

new Vue({
    el: '#app'
})


