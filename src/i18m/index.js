
import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        about:"About",
        service:"Service",
        mywork:"My Work",
        contact:"Contact Me",
        name:"Reach KH",
        web:"Web Developer",
        api:"API",
        lang:"En",

    },
    khm: {
        about:"អំពីយើង",
        service:"សេវាកម្ម",
        mywork:"ការងាររបស់ខ្ញុំ",
        contact:"ទាក់ទងមកខ្ញុំ",
        name:"ស៊ឹម រាជ",
        web:"អ្នកអភិវឌ្ឍន៍គេហទំព័រ",
        api:"អេភីអាយ",
        lang:"Kh",
    },
}

// Create i18n instance with options
const i18n = createI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
})

export default i18n