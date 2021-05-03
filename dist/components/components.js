Vue.component('Definition',{
    template: '<div class="definition">' +
        '<h4>Definition (<defn :id="defName">{{ name }}</defn>)</h4>' +
        '<p><slot></slot></p>' +
        '</div>',
    props: ['name'],
    data() {
        return {
            defName: 'def-' + this.name,
        }
    }
})

Vue.component('Folgerung',{
    template: '<div class="folgerung">' +
            '<h4>Folgerung</h4>' +
            '<p><slot></slot></p>' +
        '</div>'
})

Vue.component('cs-applet',{
    template:'<div class="csapplet">' +
        '<iframe :src="srcApplet"  :style="styleObject">' +
        '</iframe>' +
        '<p><b>Beschreibung:</b> <slot></slot></p>' +
        '</div>',
    props: ['srcPrm', 'hPrm'],
    data() {
        let appHeight = this.hPrm;
        return {
            srcApplet: this.srcPrm,
            styleObject: {
                border: 'none',
                top: '0',
                left: '0',
                width: '100%',
                height: appHeight
            }
        }
    }
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

Vue.component('Bild',{
    template: '<div class="imgcard">\n' +
        '    <img class="w-full" :src="srcImage" :alt="imgHeading">\n' +
        '    <h5>{{name}}</h5>' +
        '<p class="imgtext"><slot></slot></p>' +
        '</div>',
    props: ['src','name'],
    data() {
        return {
            srcImage: this.src,
            imgHeading: this.name
        }
    }
})

new Vue({
    el: '#app'
})


