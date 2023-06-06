import { Router } from 'express'
import LoadSkills from '../functions/skills.js' //Get 3 random skills function

const router = Router()
//inicio
router.get('/', (req, res) => {
    const three_skills = LoadSkills(); 
    res.render('index', {title: 'First Node.JS website', three_skills});
});
//about
router.get('/about', (req, res) => res.render('about', {title: 'About Me'}))
//contact
router.get('/contact', (req, res) => res.render('contact', {title: 'Contact'}))

export default router
