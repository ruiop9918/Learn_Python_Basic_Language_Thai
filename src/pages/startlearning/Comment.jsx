export default function Comment() {
    return(
        <div className="page-content"> 
            <h1>การ Comment ในภาษา Python</h1>
            <hr/>
            <h2>การใช้ #</h2>
            <h3>ใช้เครื่องหมาย <span className="operator-symbol">#</span> เพื่ออธิบายบรรทัดเดียว</h3>
            <p>เช่น :</p>
              <div className="sizecode" style={{
                backgroundColor: '#1e1e1ed8',
                color: '#d4d4d4',
                padding: '16px',
                borderRadius: '8px',
                fontFamily: 'monospace',
                whiteSpace: 'pre',
                lineHeight: '1.5',
                textAlign:"start",
                }} >        
                <span style={{color: '#7cad5aff'}}># นี้เป็นการ Cpmment</span>
                {"\n"}<span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"Hello World!"</span>)<span style={{color: '#7cad5aff'}}>   # หรือจะ Cpmment ท้ายคำสั่ง</span>
            </div>
            <hr/>
            <h2>การใช้ """</h2>
            <h3>ใช้เครื่องหมาย <span className="operator-symbol">"""</span> หรือ <span className="operator-symbol">'''</span> เพื่ออธิบายหลายบรรทัด</h3>
            <p>เช่น :</p>
            <div className="sizecode" style={{
                backgroundColor: '#1e1e1ed8',
                color: '#d4d4d4',
                padding: '16px',
                borderRadius: '8px',
                fontFamily: 'monospace',
                whiteSpace: 'pre',
                lineHeight: '1.5',
                textAlign:"start",
                }} >        
                <span style={{color: '#7cad5aff'}}>"""</span>
                {"\n"}<span style={{color: '#7cad5aff'}}>ฉันชื่อ นายใจดี ดีงาม</span>
                {"\n"}<span style={{color: '#7cad5aff'}}>ฉันอายุ 18 ปี</span>
                {"\n"}<span style={{color: '#7cad5aff'}}>ตอนนี้ฉันเป็นนักเรียนอยู่ครับ</span>
                {"\n"}<span style={{color: '#7cad5aff'}}>"""</span>
                {"\n"}<span style={{color: '#7cad5aff'}}>#หรือจะใช้</span>
                {"\n"}<span style={{color: '#7cad5aff'}}>'''</span>
                {"\n"}<span style={{color: '#7cad5aff'}}>ฉันชื่อ นายใจดี ดีงาม</span>
                {"\n"}<span style={{color: '#7cad5aff'}}>ฉันอายุ 18 ปี</span>
                {"\n"}<span style={{color: '#7cad5aff'}}>ตอนนี้ฉันเป็นนักเรียนอยู่ครับ</span>
                {"\n"}<span style={{color: '#7cad5aff'}}>'''</span>
                {"\n"}<span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"Hello World!"</span>)
            </div>
        </div>
    )
}