
export default function Intro() {
  return (
    <div className="page-content">
      <h1 >บทนำ Python</h1>
      <hr/>
      <h2>Downloading</h2>
      <h3>คุณสามารถดาวน์โหลด Python ได้ที่ Link  :  <span className="operator-symbol">https://www.python.org/</span></h3>
      
      <hr/>
      <h2>IDE คืออะไร</h2>
      <h3>IDE ย่อมาจาก</h3>
      <p>Integrated Development Environment</p>
      <p>แปลว่า “สภาพแวดล้อมสำหรับการพัฒนาโปรแกรมแบบรวมทุกอย่างไว้ด้วยกัน”</p>
      <hr/>
      <p>พูดง่าย ๆ คือเป็น โปรแกรมที่ช่วยให้เราเขียนโค้ดได้สะดวกขึ้น
        โดย IDE จะรวมเครื่องมือต่าง ๆ ที่จำเป็นในการพัฒนาไว้ในที่เดียว
      </p>
      <p>เช่น</p>
      <p>- ตัวเขียนโค้ด (Code Editor)</p>
      <p>- ตัวตรวจจับข้อผิดพลาด (Debugger)</p>
      <p>- ระบบรันโค้ด (Run/Execute)</p>
      <p>- การจัดการไฟล์และโปรเจกต์</p>
      <p>- ระบบช่วยแนะนำคำสั่ง (Auto-completion / IntelliSense)</p>
      <hr/>
      <h2>IDE ที่นิยมใช้กับภาษา Python</h2>
      <h3>1.IDLE (Python IDE มาตรฐาน)</h3>
      <p>- มาพร้อมกับ Python ทันทีเมื่อเราติดตั้ง</p>
      <p>- เหมาะสำหรับผู้เริ่มต้น เพราะใช้งานง่าย</p>
      <p>- มีทั้งตัวเขียนโค้ดและตัวรัน (Shell) ในตัวเดียว</p>
      <p>- เหมาะกับการทดลองเขียนโค้ดสั้น ๆ หรือฝึกพื้นฐาน</p>
      <p>ตัวอย่าง:</p>
      <p>เปิดโปรแกรมชื่อ “IDLE (Python x.x)” หลังติดตั้ง Python แล้วสามารถพิมพ์คำสั่ง Python ได้ทันที</p>
    <h3>2.PyCharm</h3>
    <p>- พัฒนาโดยบริษัท JetBrains</p>
    <p>- เป็น IDE ที่สมบูรณ์แบบมากสำหรับ Python</p>
    <p>- มีระบบช่วยเขียนโค้ด, ตรวจ error, รัน, debug, และทำงานกับโปรเจกต์ใหญ่ได้ดีมาก</p>
    <p>- มีทั้ง Community (ฟรี) และ Professional (เสียเงิน)</p>
    <p>เหมาะกับ: นักพัฒนา Python ระดับกลางถึงสูง หรือคนที่ทำเว็บ, Data Science</p>
    <h3>3.VS Code (Visual Studio Code)</h3>
    <p>- เป็น editor จาก Microsoft</p>
    <p>- ไม่ใช่ IDE เต็มตัว แต่ติดตั้ง plugin สำหรับ Python ได้</p>
    <p>- ใช้งานง่าย, หน้าตาสวย, และรองรับหลายภาษา</p>
    <p>- เหมาะทั้งผู้เริ่มต้นและระดับสูง</p>
    <p>(ส่วนใหญ่ในวงการชอบใช้ VS Code เพราะเบาและปรับแต่งได้เยอะ)</p>
    <h3>4.Jupyter Notebook</h3>
    <p>- ใช้บ่อยในสาย Data Science / Machine Learning</p>
    <p>- รันโค้ดได้ทีละบล็อก (cell) และแสดงผลลัพธ์เช่น ตาราง กราฟ ได้ทันที</p>
    <p>- เหมาะกับงานวิเคราะห์ข้อมูลและสอนโปรแกรม</p>
    <h3>5.Thonny</h3>
    <p>- IDE ที่ออกแบบมาสำหรับผู้เริ่มต้นโดยเฉพาะ</p>
    <p>- ใช้งานง่ายมาก มีตัว debugger ที่เห็นค่าตัวแปรทีละขั้นตอน</p>
    <p>- เหมาะกับนักเรียน นักศึกษา หรือคนเริ่มเรียน Python ใหม่ ๆ</p>
    <hr/>
    <h2> <span className="operator-symbol">pip</span> ใน Python คืออะไร?</h2>
    <h3>pip (ย่อมาจาก Pip Installs Packages หรือ Pip Installs Python) คือ:</h3>
    <p>ตัวจัดการแพ็กเกจ (package manager) สำหรับภาษา Python ที่ใช้ในการติดตั้ง อัปเดต และจัดการไลบรารีหรือโมดูลภายนอกที่ไม่รวมอยู่ใน Python มาตรฐาน</p>
    <hr/>
    <h3>หน้าที่หลักของ pip</h3>
    <p>1.ติดตั้งแพ็กเกจ จาก Python Package Index (PyPI)</p>
    <p>- เช่น :  <span className="operator-symbol">pip install package_name</span></p>
    <p>2.อัปเดตแพ็กเกจ</p>
    <p>- เช่น :  <span className="operator-symbol">pip install --upgrade package_name</span></p>
    <p>3.ถอนการติดตั้งแพ็กเกจ</p>
    <p>- เช่น :  <span className="operator-symbol">pip uninstall package_name</span></p>
    <p>4.ดูรายการแพ็กเกจที่ติดตั้งอยู่</p>
    <p>- เช่น :  <span className="operator-symbol">pip list</span></p>
    <p>5.บันทึกเวอร์ชันแพ็กเกจทั้งหมดลงไฟล์ requirements.txt</p>
    <p>- เช่น :  <span className="operator-symbol">pip freeze &gt; requirements.txt</span></p>
    <p>6.ติดตั้งแพ็กเกจทั้งหมดจากไฟล์ requirements.txt</p>
    <p>- เช่น :  <span className="operator-symbol">pip install -r requirements.txt</span></p>
    <br/>
    <p><span className="operator-symbol">pip</span> เป็นเครื่องมือสำคัญที่ช่วยให้คุณจัดการไลบรารี Python ได้สะดวกและเป็นระบบ โดยเฉพาะเมื่อทำงานในโปรเจกต์ที่ต้องใช้แพ็กเกจหลายตัวพร้อมกัน</p>
    <hr/>
    <h2>Library ของ Python เบื้องต้น</h2>
    <h3>พื้นฐานและการจัดการข้อมูล (Core & Utilities)</h3>
    <p>- os, sys, pathlib — จัดการระบบไฟล์และ environment</p>
    <p>- datetime, time, calendar — จัดการเวลาและวันที่</p>
    <p>- json, csv, pickle, yaml — จัดการข้อมูลรูปแบบต่าง ๆ</p>
    <p>- argparse, click, typer — สร้าง command-line interface</p>
    <p>- logging, traceback — จัดการ log และ debug</p>
    <br/>
    <h3>การคำนวณและวิเคราะห์ข้อมูล (Data Science)</h3>
    <p>- NumPy — คำนวณเชิงตัวเลข</p>
    <p>- Pandas — วิเคราะห์และจัดการข้อมูลตาราง</p>
    <p>- SciPy — ฟังก์ชันทางคณิตศาสตร์และวิทยาศาสตร์</p>
    <p>- Statsmodels — การวิเคราะห์ทางสถิติ</p>
    <p>- SymPy — คณิตศาสตร์เชิงสัญลักษณ์ (symbolic math)</p>
    <br/>
    <h3> การแสดงผลข้อมูล (Visualization)</h3>
    <p>- Matplotlib, Seaborn — กราฟพื้นฐานและสถิติ</p>
    <p>- Plotly, Bokeh, Altair — กราฟ interactive</p>
    <p>- Dash, Streamlit — สร้างเว็บแอปสำหรับ data visualization</p>
    <br/>
    <h3> Machine Learning / Deep Learning</h3>
    <p>- Scikit-learn — Machine Learning ทั่วไป</p>
    <p>- TensorFlow, Keras, PyTorch — Deep Learning</p>
    <p>- XGBoost, LightGBM, CatBoost — Gradient Boosting</p>
    <p>- Hugging Face Transformers — NLP และโมเดลขนาดใหญ่</p>
    <p>- OpenCV, MediaPipe — Computer Vision</p>
    <p>- fastai — Wrapper ใช้งานง่ายบน PyTorch</p>
    <br/>
    <h3>Natural Language Processing (NLP)</h3>
    <p>- NLTK, spaCy, Gensim, TextBlob — ประมวลผลข้อความ</p>
    <p>- SentenceTransformers, LangChain — ทำงานกับ embeddings และ LLM</p>
    <br/>
    <h3> เว็บและ API (Web Development)</h3>
    <p>- Flask, Django, FastAPI — สร้างเว็บแอปและ REST API</p>
    <p>- Requests, httpx, aiohttp — เรียกใช้งาน API</p>
    <p>- BeautifulSoup, Scrapy, Selenium — Web Scraping</p>
    <br/>
    <h3> การทำงานแบบขนานและประสิทธิภาพ (Performance & Parallelism)</h3>
    <p>- multiprocessing, threading, asyncio — การประมวลผลแบบขนาน</p>
    <p>- Numba, Cython, PyPy — เพิ่มความเร็วในการคำนวณ</p>
    <p>- Joblib, Dask, Ray — การประมวลผลแบบกระจาย</p>
    <br/>
    <h3> ฐานข้อมูล (Databases)</h3>
    <p>- sqlite3, SQLAlchemy, Peewee — ORM และฐานข้อมูล SQL</p>
    <p>- PyMongo, Motor — MongoDB</p>
    <p>- Redis-py, Cassandra-driver — NoSQL</p>
    <br/>
    <h3>DevOps / Automation / Testing</h3>
    <p>- Fabric, Invoke, Paramiko — Automation และ SSH</p>
    <p>- pytest, unittest, nose2 — Testing</p>
    <p>- tox, coverage — ตรวจสอบคุณภาพโค้ด</p>
    <br/>
    <h3> การสร้าง GUI (Desktop Apps)</h3>
    <p>- Tkinter — GUI มาตรฐานของ Python</p>
    <p>- PyQt, PySide, Kivy, wxPython — สร้างแอปเดสก์ท็อป</p>
    <br/>
    <h3> การประมวลผลภาพ เสียง และวิดีโอ (Media Processing)</h3>
    <p>- Pillow (PIL) — จัดการรูปภาพ</p>
    <p>- MoviePy, OpenCV — วิดีโอ</p>
    <p>- pydub, librosa — เสียงและสัญญาณ</p>
    <br/>
    <h3> เครือข่ายและ IoT (Networking & Hardware)</h3>
    <p>- socket, asyncio, Twisted — เครือข่าย</p>
    <p>- RPi.GPIO, Adafruit_Blinka — Raspberry Pi และ IoT</p>
    <br/>
    <h3> ความปลอดภัยและการเข้ารหัส (Security & Cryptography)</h3>
    <p>- hashlib, hmac, secrets — การเข้ารหัสพื้นฐาน</p>
    <p>- cryptography, PyJWT, bcrypt — การเข้ารหัสขั้นสูงและ token</p>
    <br/>
    <h3>การเรียนรู้เชิงลึกและ AI ขั้นสูง (AI & LLM)</h3>
    <p>- Transformers, LangChain, LlamaIndex — ทำงานกับโมเดลภาษา</p>
    <p>- OpenAI, Anthropic, Cohere — เชื่อมต่อ API ของโมเดล AI</p>
    <br/>
    <h3> การจัดการไฟล์และเอกสาร (File & Document Processing)</h3>
    <p>- openpyxl, xlrd, xlwt, pandas — Excel</p>
    <p>- PyPDF2, pdfplumber, reportlab — PDF</p>
    <p>- docx, python-docx — Word</p>
    <br/>
    <h3> การพัฒนาเกม (Game Development)</h3>
    <p>- Pygame, Arcade, Panda3D — สร้างเกม 2D/3D</p>
    <br/>
    <h3>การจำลองและวิทยาศาสตร์ (Simulation & Scientific)</h3>
    <p>- SimPy, PyDy, Astropy, Biopython, MDAnalysis — ใช้ในงานวิทยาศาสตร์เฉพาะทาง</p>
    <hr/>
    <h3>Python มี ecosystem ที่ใหญ่มาก library เหล่านี้เป็นเพียง “แกนหลัก” ที่นิยมใช้จริงในแต่ละสายงาน หากต้องการค้นหาเพิ่มเติม สามารถดูได้จาก <span className="operator-symbol">https://pypi.org</span> ซึ่งเป็นแหล่งรวมแพ็กเกจทั้งหมดของ Python ครับ</h3>
    <hr/>
    <p >ขออภัยถ้าเนื้อหาไม่ละเอียด เป็นการเเนะนำเบื้องต้นเฉยๆ (ไปหาข้อมูลเพิ่มเติมได้ครับ)</p>
    </div>
  );
}
