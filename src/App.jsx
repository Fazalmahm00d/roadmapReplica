import './App.css'
import Navigation from './components/Navigation'
import Header from './components/Header'
import Container from './components/Container'
import Container2 from './components/Container2'
import Banner from './components/Banner'
import Banner2 from './components/Banner2'
import Footer from './components/Footer'
function App() {  
  const maps=["Role-Based Roadmaps","Skill-Based Roadmaps","Project Ideas","Best Practices","Questions"]
  const rolemaps=["Frontend","Backend","DevOps","Full Stack","AI engineer","Data Analyst","Ai and Data Scientist","Android","iOS","PostgresSQL","BlockChain","QA","Software Architect","Cyber Security","UX Design","Game Developer","Technical Writer","MLOps","Product Manager","Developer Relations"]
  const skillmaps=["Computer Science","React" ,"Angular","JavaScript","Node.js","TypeScript","Python","SQL","System Design","API Design","ASP.NET Core","Java","C++","Flutter","Spring Boot","Go Roadmap","Rust","GraphQL","Design and Architecture","Design System","React Native","AWS","Code Review","Docker","Kubernetes","Linux","MongoDB","Prompt Engineering","Terraform","Data Structure and Algorithms","Git and GitHub","Redis"]
  const ideas=["Frontend","Backend"]
  const practices=["Backend Performance","Frontend Performance","API Security","Code Reviews","AWS"]
  const questions=["JavaScript","Node.js","React","Backend","Frontend","DevOps"]
  return (
      <body className='flex flex-col'>
        <Navigation></Navigation>
        <div className='bg-gradient-to-b from-slate-900 to-black'>
        <Header></Header>
        <Container 
              mapsData={maps[0]} dataArray={rolemaps} createbtn=""
        ></Container>
        <Container 
              mapsData={maps[1]} dataArray={skillmaps} createbtn=""
        ></Container>
        <Container 
              mapsData={maps[2]} dataArray={ideas} createbtn="hidden"
        ></Container>
        <Container 
              mapsData={maps[3]} dataArray={practices} createbtn="hidden"
        ></Container>
        <Container 
              mapsData={maps[4]} dataArray={questions} createbtn="hidden"
        ></Container>
        <Container2></Container2>
        <Banner></Banner>
        <Banner2></Banner2>
        <Footer></Footer>
        </div>
      </body>

  )
}

export default App
