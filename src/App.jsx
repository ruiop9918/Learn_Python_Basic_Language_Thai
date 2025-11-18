
import { Routes, Route, NavLink ,Navigate ,useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import StartLearning from "./pages/StartLearning";
import Intro from "./pages/startlearning/Intro";
import Syntax from "./pages/startlearning/Syntax";
import LearnHome from "./pages/startlearning/LearnHome";
import Output from "./pages/startlearning/Output";  
import Comment from "./pages/startlearning/Comment";
import Datatype from "./pages/startlearning/Datatype";
import Variable from "./pages/startlearning/Variable";
import LearningPythonLogo from "./components/LearningPythonLogo";
import Input from "./pages/startlearning/Input";
import Casting from "./pages/startlearning/Casting";
import Operator from "./pages/startlearning/Operators";
import If_else from "./pages/startlearning/If_else";
import Match from "./pages/startlearning/Match";
import ForLoop from "./pages/startlearning/ForLoop";
import WhileLoop from "./pages/startlearning/WhileLoop";
import DoWhileLoop from "./pages/startlearning/DoWhileLoop";
import String from "./pages/startlearning/String";
import AdvanceString from "./pages/startlearning/AdvanceString";
import List from "./pages/startlearning/List";
import ListAdvance from "./pages/startlearning/ListAdvanced";
import Tuple from "./pages/startlearning/Tuple";
import Set from "./pages/startlearning/Set";
import Dict from "./pages/startlearning/Dict";
import PatternMatching from "./pages/startlearning/PatternMatching";
import Functions from "./pages/startlearning/Functions";
import Scope from "./pages/startlearning/Scope";
import ExceptionHandling from "./pages/startlearning/Exception";
import Module from "./pages/startlearning/Module";
import OOP from "./pages/startlearning/OOP";
import TypeError from "./pages/startlearning/TypeError";
import Escape_Characters from "./pages/startlearning/Escape_Characters";
import ScrollToTop from "./ScrollToTop";
import "./App.css";
export default function App() {
  const location = useLocation();
  const isHomeActive = location.pathname === "/" || location.pathname === "/home";
  return (
    <>
      <ScrollToTop/>
        {/* เมนูนำทาง */}
        <nav >
            <div className="nav-logo" >
              <LearningPythonLogo className="logo"/>
            </div>
            <div className="nav-links">
              <NavLink className={({isActive}) => (isActive || isHomeActive ? "nav-link active":"nav-link")} to="/home" >Explain</NavLink>
              <NavLink className={({isActive}) => (isActive ? "nav-link active":"nav-link")} to="/startlearning">Start Learning to Python</NavLink>
              <NavLink className={({isActive}) => (isActive ? "nav-link active":"nav-link")} to="/About">About Us</NavLink>
            </div>
        </nav>
        
      {/* เส้นทางแต่ละหน้า */}
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Home/>} />
        </Route>
        <Route path="/startlearning" element={<StartLearning />}>
            <Route index element={<Navigate to="LearnHome" replace />} />
            <Route path="learnhome" element={<LearnHome/>} />
            <Route path="intro" element={<Intro />} />
            <Route path="syntax" element={<Syntax />} />
            <Route path="output" element={<Output/>} />
            <Route path="comment" element={<Comment/>}></Route>
            <Route path="datatype" element={<Datatype/>}></Route>
            <Route path="variable" element={<Variable/>}></Route>
            <Route path="casting" element={<Casting/>}></Route>
            <Route path="input" element={<Input/>}></Route>
            <Route path="operator" element={<Operator/>}></Route>
            <Route path="string" element={<String/>}></Route>
            <Route path="advancestring" element={<AdvanceString/>}></Route>
            <Route path="list" element={<List/>}></Route>
            <Route path="advancelist" element={<ListAdvance/>}></Route>
            <Route path="tuple" element={<Tuple/>}></Route>
            <Route path="set" element={<Set/>}></Route>
            <Route path="dict" element={<Dict/>}></Route>
            <Route path="if_else" element={<If_else/>}></Route>
            <Route path="match" element={<Match/>}></Route>
            <Route path="for_loop" element={<ForLoop/>}></Route>
            <Route path="while_loop" element={<WhileLoop/>}></Route>
            <Route path="do_while_loop" element={<DoWhileLoop/>}></Route>
            <Route path="patternmatching" element={<PatternMatching/>}></Route>
            <Route path="functions" element={<Functions/>}></Route>
            <Route path="exception" element={<ExceptionHandling/>}></Route>
            <Route path="scope" element={<Scope/>}></Route>
            <Route path="module" element={<Module/>}></Route>
            <Route path="oop" element={<OOP/>}></Route>
            <Route path="typeerror" element={<TypeError/>}></Route>
            <Route path="escapecharacters" element={<Escape_Characters/>}></Route>
        </Route> 
        <Route path="/About" element={<About/>} />

      </Routes>
    </>
  );

}
