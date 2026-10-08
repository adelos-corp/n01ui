import React,{useEffect,useRef,useState} from 'react';
import {createRoot} from 'react-dom/client';
import {Activity,Globe2,Crosshair,Users,Shield,Database,ExternalLink,Map,Target,Radio,BarChart3,Menu,X,ChevronUp} from 'lucide-react';
import {motion,AnimatePresence} from 'framer-motion';
import SpotlightCard from './components/SpotlightCard';
import CountUp from './components/CountUp';
import BlurText from './components/BlurText';
import Aurora from './components/Aurora';
import './styles.css';

const metrics=[['INCIDENTS',64508,Activity],['FATALITIES',188427,Crosshair],['INJURIES',125789,Shield],['HOSTAGES / MISSING',32761,Users]];
const sections=[['overview','Overview',BarChart3],['geography','Geography',Globe2],['tactics','Tactics',Target],['actors','Actors',Users],['casualties','Casualties',Crosshair]];

function DashboardFrame(){
 return <iframe className="dashboard-frame" title="GRID analytical visualizations" src="https://raw.githubusercontent.com/adelos-corp/n01ui/main/grid_terrorism_dashboard.html"/>}

function App(){
 const [active,setActive]=useState('overview'); const [menu,setMenu]=useState(false);
 const go=id=>{setActive(id);setMenu(false);document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'})};
 useEffect(()=>{const ids=sections.map(s=>s[0]);const obs=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&setActive(e.target.id)),{rootMargin:'-30% 0px -60%'});ids.forEach(id=>{const el=document.getElementById(id);if(el)obs.observe(el)});return()=>obs.disconnect()},[]);
 return <main>
  <Aurora/><div className="grid-bg"/><div className="grain"/>
  <header className="topbar glass">
   <div className="brand"><div className="brand-mark"></div><div><strong>GLOBAL INCIDENT INTELLIGENCE</strong><span>GTTAC / GRID ANALYTICS</span></div></div>
   <div className="status"><span className="pulse"/>DATA SNAPSHOT <b>2018–2026</b></div>
   <button className="menu-btn" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button>
  </header>
  <AnimatePresence>{menu&&<motion.div className="mobile-nav glass" initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}}>{sections.map(([id,n,I])=><button key={id} onClick={()=>go(id)}><I size={15}/>{n}</button>)}</motion.div>}</AnimatePresence>
  <section className="hero" id="overview">
   <div className="eyebrow"><Database size={14}/> DIPLOMA FINAL YEAR PROJECT</div>
   <h1><BlurText>A Statistical &amp; Geographic Study of a Synthetic Global <em>Terrorism Incident Dataset.</em></BlurText></h1>
   <p>This is the implemented analytical interface for the supplied GTTAC Record of Incident Database (GRID) snapshot, bringing statistical, geographic, tactic, actor and casualty analysis into one navigable surface.</p>
   <div className="hero-meta"><span>64,508 INCIDENT RECORDS</span><i/> <span>01 JAN 2018 — 13 FEB 2026</span></div>
  </section>
  <nav className="nav glass">{sections.map(([id,n,I],i)=><button key={id} className={active===id?'active':''} onClick={()=>go(id)}><I size={13}/><span>0{i+1}</span>{n}</button>)}</nav>
  <section className="metrics">
   {metrics.map(([label,value,I])=><SpotlightCard className="metric glass" key={label}><div className="metric-top"><I size={16}/><span>GRID</span></div><span className="metric-label">{label}</span><strong><CountUp value={value}/></strong><small>RECORDED IN SNAPSHOT</small></SpotlightCard>)}
   <SpotlightCard className="metric peak glass"><div className="metric-top"><Globe2 size={16}/><span>YEAR</span></div><span className="metric-label">PEAK INCIDENT VOLUME</span><strong>2020</strong><small>HIGHEST ANNUAL ACTIVITY</small></SpotlightCard>
  </section>
  <section className="section-head" id="geography"><div><span>01 / ANALYTICAL OVERVIEW</span><h2>Operational picture</h2><p>Incident volume, casualty burden and global distribution.</p></div><div className="section-chip"><Radio size={13}/> GRID SNAPSHOT</div></section>
  <section className="academic-panel glass"><img className="institution-emblem" src="https://careerandcampus.com/static//media/institute_logo/kk.JPG" alt="Krishnaveni Exhibition Society emblem"/><div><span className="label">ACADEMIC CONTEXT</span><strong>Diploma Final Year · Computer Engineering</strong><p>KES Polytechnic College · Academic Year 2026–2027</p></div><div><span className="label">SUPERVISION</span><strong>N. Kavya</strong><p>Lecturer</p></div><div><span className="label">INSTITUTIONAL LEADERSHIP</span><strong>M. Srinivasa Rao</strong><p>Head of Department · Principal / External Examiner</p></div></section>
  <DashboardFrame/>
  <section className="hidden-anchor" id="actors"/><section className="hidden-anchor" id="casualties"/>
  <footer className="footer-panel glass" id="tactics"><div><span className="label">PROJECT & METHODOLOGY</span><strong>A Statistical and Geographic Study of a Synthetic Global Terrorism Incident Dataset</strong><p>Diploma Final Year project in Computer Engineering at KES Polytechnic College.  is an original visualization interface generated from the supplied GTTAC Record of Incident Database (GRID) snapshot. Analytical definitions follow the source data.</p></div><a href="https://www.GTTAC.com" target="_blank" rel="noreferrer">GTTAC <ExternalLink size={13}/></a><a href="https://www.GRIDdata.com" target="_blank" rel="noreferrer">GRID <ExternalLink size={13}/></a></footer>
  <button className="top-btn" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}><ChevronUp size={16}/></button>
 </main>
}
createRoot(document.getElementById('root')).render(<App/>);