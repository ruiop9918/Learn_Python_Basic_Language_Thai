import "../components/StartLearning.css";
import { NavLink, Outlet , useLocation } from "react-router-dom";
import { useEffect, useRef ,useState} from "react";
import { HiChevronDoubleRight } from "react-icons/hi";
import { HiChevronDoubleLeft } from "react-icons/hi";

export default function StartLearning() {
  const sidebarRef = useRef(null);
  const location = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const toggleBtnRef = useRef(null);
  // โหลดตำแหน่ง scroll ของ sidebar
  useEffect(() => {
    const savedScroll = localStorage.getItem("sidebarScroll");
    if (savedScroll && sidebarRef.current) {
      sidebarRef.current.scrollTop = parseInt(savedScroll, 10);
    }
  }, []);

  // เก็บตำแหน่ง scroll ทุกครั้งที่ scroll
  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;
    const handleScroll = () => {
      localStorage.setItem("sidebarScroll", sidebar.scrollTop);
    };
    sidebar.addEventListener("scroll", handleScroll);
    return () => sidebar.removeEventListener("scroll", handleScroll);
  }, []);

  // เมื่อ pathname เปลี่ยน ให้เลื่อนไปหา NavLink ที่ active
  useEffect(() => {
    const activeLink = sidebarRef.current?.querySelector(".btn-sidebar.active");
    if (activeLink && sidebarRef.current) {
      activeLink.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [location.pathname]);

  
  // ปิด sidebar เมื่อคลิกนอก (แต่ไม่ปิดเมื่อคลิกปุ่ม toggle หรือ sidebar)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(e.target)
      ) {
        setSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    
    <div className={`page-startLearning ${sidebarOpen ? "sidebar-open" : "sidebar-closed"}`}>
    <button
      className="toggle-sidebar-btn-fixed"
      ref={toggleBtnRef}
      onClick={() => setSidebarOpen(!sidebarOpen)}
    >
      {sidebarOpen ? (
        <HiChevronDoubleLeft size={54} />
      ) : (
        <HiChevronDoubleRight size={54} />
      )}
    </button>
      <aside className={`sidebar ${sidebarOpen ? "open" : "collapsed"}`} ref={sidebarRef}>
         <div className="sidebar-header">
          <h6>Lessons Python</h6>
        </div>

        <ul>
          <NavLink className={({ isActive }) => (isActive ? "btn-sidebar active" : "btn-sidebar")} to="learnhome">
            Python Home
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "btn-sidebar active" : "btn-sidebar")} to="intro">
            Python Introduction
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "btn-sidebar active" : "btn-sidebar")} to="syntax">
            Python Syntax
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "btn-sidebar active" : "btn-sidebar")} to="output">
            Python Output
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "btn-sidebar active" : "btn-sidebar")} to="escapecharacters">
            Python Escape Characters
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "btn-sidebar active" : "btn-sidebar")} to="comment">
            Python Comment
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "btn-sidebar active" : "btn-sidebar")} to="datatype">
            Python Data Type
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "btn-sidebar active" : "btn-sidebar")} to="variable">
            Python Variable
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "btn-sidebar active" : "btn-sidebar")} to="input">
            Python Input
          </NavLink>
           <NavLink className={({ isActive }) => (isActive ? "btn-sidebar active" : "btn-sidebar")} to="casting">
            Python Casting
          </NavLink>
           <NavLink className={({ isActive }) => (isActive ? "btn-sidebar active" : "btn-sidebar")} to="operator">
            Python Operators
          </NavLink>
           <NavLink className={({ isActive }) => (isActive ? "btn-sidebar active" : "btn-sidebar")} to="typeerror">
            Python TypeError
          </NavLink>
           <NavLink className={({ isActive }) => (isActive ? "btn-sidebar active" : "btn-sidebar")} to="string">
            Python String
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "btn-sidebar active" : "btn-sidebar")} to="advancestring">
            Python Advance String
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "btn-sidebar active" : "btn-sidebar")} to="list">
            Python List
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "btn-sidebar active" : "btn-sidebar")} to="advancelist">
            Python Advance List
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "btn-sidebar active" : "btn-sidebar")} to="tuple">
            Python Tuple
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "btn-sidebar active" : "btn-sidebar")} to="set">
            Python Set
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "btn-sidebar active" : "btn-sidebar")} to="dict">
            Python Dict
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "btn-sidebar active" : "btn-sidebar")} to="if_else">
            Python If...Else
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "btn-sidebar active" : "btn-sidebar")} to="match">
            Python Match Statement
          </NavLink>
           <NavLink className={({ isActive }) => (isActive ? "btn-sidebar active" : "btn-sidebar")} to="patternmatching">
            Python Pattern Matching
          </NavLink>
          <NavLink className={({ isActive }) => (isActive ? "btn-sidebar active" : "btn-sidebar")} to="for_loop">
            Python For Loop
          </NavLink>
            <NavLink className={({ isActive }) => (isActive ? "btn-sidebar active" : "btn-sidebar")} to="while_loop">
            Python While Loop
          </NavLink>
           <NavLink className={({ isActive }) => (isActive ? "btn-sidebar active" : "btn-sidebar")} to="do_while_loop">
            Python Do While Loop
          </NavLink>
           <NavLink className={({ isActive }) => (isActive ? "btn-sidebar active" : "btn-sidebar")} to="functions">
            Python Functions
          </NavLink>
           <NavLink className={({ isActive }) => (isActive ? "btn-sidebar active" : "btn-sidebar")} to="scope">
            Python Scope of Variable
          </NavLink>
           <NavLink className={({ isActive }) => (isActive ? "btn-sidebar active" : "btn-sidebar")} to="exception">
            Python Exception
          </NavLink>
           <NavLink className={({ isActive }) => (isActive ? "btn-sidebar active" : "btn-sidebar")} to="module">
            Python Module
          </NavLink>
           <NavLink className={({ isActive }) => (isActive ? "btn-sidebar active" : "btn-sidebar")} to="oop">
            Python OOP
          </NavLink> 
        </ul>
      </aside>

      {/* พื้นที่แสดงเนื้อหาแต่ละหัวข้อ */}
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

