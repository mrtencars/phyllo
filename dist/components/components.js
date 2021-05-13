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
            '<h4>{{ name }}</h4>' +
            '<p><slot></slot></p>' +
        '</div>',
    props: ['name']
})

Vue.component('Aufgabe',{
    template: '<div class="aufgabe">' +
        '<h4>Aufgabe {{ name }}</h4>' +
        '<p><slot></slot></p>' +
        '</div>',
    props: ['name']
})

Vue.component('Beweis',{
    template: '<div class="beweis">' +
        '<h4>{{ name }}</h4>' +
        '<p><b>Begründung:</b></p>' +
        '<p><slot></slot></p>' +
        '<span style="float: right">\\(\\blacksquare\\)</span>' +
        '</div>',
    props: ['name']
})

Vue.component('Beispiel',{
    template: '<div class="beispiel">' +
        '<h4><i>Beispiel</i> {{ name }}</h4>' +
        '<p><slot></slot></p>' +
        '</div>',
    props: ['name']
})


Vue.component('Kasten', {
    template: '<div class="kasten">' +
        '<h4>{{ name }}</h4>' +
        '<p><slot></slot></p>' +
        '</div>',
    props: ['name']
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

Vue.component('Knopf',{
    template: '<div class="knopf">\n' +
        '    <button class="smallbutton" @click="schalteKnopf">{{ name }}</button>\n' +
        '    <div v-if="zeigeKnopf" class="knopfinhalt">\n' +
        '       <p><slot></slot></p>\n' +
        '    </div>\n' +
        '  </div>',
    props: ['name'],
    data() {
        return {
            zeigeKnopf: false,
        }
    },
    methods: {
        schalteKnopf(){
            this.zeigeKnopf = !this.zeigeKnopf
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


