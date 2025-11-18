export default function Output(){
    return(
        <div className="page-content">
            <h1>การเเสดงผล Python</h1>
            <hr/>
            <h2>Fuction <span className="operator-symbol">print()</span></h2>
            <h3>Type Print Text</h3>
            <p>ตัวอย่าง:</p>
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
                <span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"Hello World!"</span>)
            </div>
            <p>ผลลัพธ์:</p>
            <div className="sizecode" style={{
                backgroundColor: '#111',
                color: '#9cdcfe',
                padding: '12px',
                borderRadius: '8px',
                fontFamily: 'monospace',
                whiteSpace: 'pre',
                lineHeight: '1.5',
                textAlign: "start",
            }}>
{`Hello World!`}
            </div>
            <p>ข้อความใน Python ต้องอยู่ภายในเครื่องหมายคำพูด คุณสามารถใช้  <span className="operator-symbol">""</span>  เครื่องหมายคำพูดคู่หรือ  <span className="operator-symbol">''</span>  เครื่องหมายคำพูดเดี่ยวก็ได้</p>
            <p>เช่น:</p>
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
                <span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"Work True"</span>)
                {"\n"}<span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>'Work True'</span>)
            </div>
            <p>ผลลัพธ์:</p>
            <div className="sizecode" style={{
                backgroundColor: '#111',
                color: '#9cdcfe',
                padding: '12px',
                borderRadius: '8px',
                fontFamily: 'monospace',
                whiteSpace: 'pre',
                lineHeight: '1.5',
                textAlign: "start",
            }}>
{`Work True
Work True`}
            </div>
            <p>ตัวอย่างที่ผิด:</p>
             <div className="sizecode" style={{
                backgroundColor: '#491313ff',
                color: '#d4d4d4',
                padding: '16px',
                borderRadius: '8px',
                fontFamily: 'monospace',
                whiteSpace: 'pre',
                lineHeight: '1.5',
                textAlign:"start",
                }} >         
                <span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>Work False error</span>)
            </div>
            <hr/>
            <h3>Type Print Numbers</h3>
            <p>ตัวอย่าง:</p>
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
                <span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#7a4b4bff'}}>500</span>)
            </div>
            <p>ผลลัพธ์:</p>
            <div className="sizecode" style={{
                backgroundColor: '#111',
                color: '#9cdcfe',
                padding: '12px',
                borderRadius: '8px',
                fontFamily: 'monospace',
                whiteSpace: 'pre',
                lineHeight: '1.5',
                textAlign: "start",
            }}>
{`500`}
            </div>
            <hr/>
            <h3>ผสม Type Text เเละ Type Number</h3>
            <p>ตัวอย่าง:</p>
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
                <span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"My Salary = ",</span><span style={{color: '#7a4b4bff'}}>50000</span>)
            </div>
            <p>ผลลัพธ์:</p>
            <div className="sizecode" style={{
                backgroundColor: '#111',
                color: '#9cdcfe',
                padding: '12px',
                borderRadius: '8px',
                fontFamily: 'monospace',
                whiteSpace: 'pre',
                lineHeight: '1.5',
                textAlign: "start",
            }}>
{`My Salary = 50000`}
            </div>
        </div>
        
    );
}
