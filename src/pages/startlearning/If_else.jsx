export default function If_else(){
    const name = "{name}";
    const status = "{status}";
    return(
        
        <div className="page-content">
            <h1>คำสั่งเงื่อนไข (if..else) ใน Python</h1>
            <hr/>
            <h2>คำสั่งเงื่อนไข (Conditional Statements)</h2>
            <h3>คำสั่งเงื่อนไขใช้สำหรับตัดสินใจว่าจะทำอะไรตามเงื่อนไขที่กำหนด</h3>
            <hr/>
            <h3> if พื้นฐาน</h3>
            <p>รูปแบบการใช้งาน : </p>
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
                <span style={{color: '#e5eaeeff'}}>age = </span><span style={{color: '#7a4b4bff'}}>18</span>
                {"\n"}<span style={{color: '#569CD6'}}>if</span><span style={{color: '#e5eaeeff'}}> age</span> &gt;= <span style={{color: '#7a4b4bff'}}>18</span>:
                {"\n"}  <span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"คุณเป็นผู้ใหญ่แล้ว"</span>)
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
{`คุณเป็นผู้ใหญ่แล้ว`}
            </div>
            <br/>
            <h3> if..else</h3>
            <p>รูปแบบการใช้งาน : </p>
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
                <span style={{color: '#e5eaeeff'}}>age = </span><span style={{color: '#7a4b4bff'}}>15</span>
                {"\n"}<span style={{color: '#569CD6'}}>if</span><span style={{color: '#e5eaeeff'}}> age</span> &gt;= <span style={{color: '#7a4b4bff'}}>18</span>:  <span style={{color: '#7cad5aff'}}># เมื่อเงื่อนไขเป็นจริง</span>
                {"\n"}  <span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"คุณเป็นผู้ใหญ่แล้ว"</span>)
                {"\n"}<span style={{color: '#569CD6'}}>else</span>:   <span style={{color: '#7cad5aff'}}># เมื่อเงื่อนไขเป็นเท็จ</span>
                {"\n"}  <span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"คุณยังเป็นเด็ก"</span>)
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
{`คุณยังเป็นเด็ก`}
            </div>
            <br/>
            <h3>if..elif..else (หลายเงื่อนไข)</h3>
            <p>รูปแบบการใช้งาน : </p>
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
                <span style={{color: '#e5eaeeff'}}>score = </span><span style={{color: '#7a4b4bff'}}>80</span>
                <br/>
                {"\n"}<span style={{color: '#569CD6'}}>if</span><span style={{color: '#e5eaeeff'}}> score</span> &gt;= <span style={{color: '#7a4b4bff'}}>80</span>:  
                {"\n"}  <span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"เกรด A"</span>)
                {"\n"}<span style={{color: '#569CD6'}}>elif</span><span style={{color: '#e5eaeeff'}}> score</span> &gt;= <span style={{color: '#7a4b4bff'}}>70</span>:   
                {"\n"}  <span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"เกรด B"</span>)
                {"\n"}<span style={{color: '#569CD6'}}>elif</span><span style={{color: '#e5eaeeff'}}> score</span> &gt;= <span style={{color: '#7a4b4bff'}}>60</span>:   
                {"\n"}  <span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"เกรด C"</span>)
                {"\n"}<span style={{color: '#569CD6'}}>elif</span><span style={{color: '#e5eaeeff'}}> score</span> &gt;= <span style={{color: '#7a4b4bff'}}>50</span>:   
                {"\n"}  <span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"เกรด D"</span>)
                {"\n"}<span style={{color: '#569CD6'}}>else</span>:   
                {"\n"}  <span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"เกรด F"</span>)
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
{`เกรด A`}
            </div>
            <br/>
            <h3>ตัวอย่างอีกเล็กน้อย :</h3>
            
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
                <span style={{color: '#e5eaeeff'}}>name = </span><span style={{color: '#569CD6'}}>None</span>
                {"\n"}<span style={{color: '#569CD6'}}>if</span><span style={{color: '#e5eaeeff'}}> name</span> <span style={{color: '#569CD6'}}>is None</span>:  
                {"\n"}  <span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"ไม่มีชื่อ"</span>)
                <br/>
                {"\n"}<span style={{color: '#569CD6'}}>if</span><span style={{color: '#e5eaeeff'}}> name</span> <span style={{color: '#569CD6'}}>is not None</span>:  
                {"\n"}  <span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}><span style={{color: '#569CD6'}}>f</span>"ชื่อคือ : <span style={{color: '#e5eaeeff'}}>{name}</span>"</span>)
                
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
{`ไม่มีชื่อ`}
            </div>
            <hr/>
            <h3>*** สำคัญ คือ : if , elif ใช้เมื่อคำสั่งเป็น True เเละ else เมื่อคำสั่งไม่ตรงกับเงื่อนไขใดๆของ if , elif ***</h3>
            <hr/>
            <h2>Nested If (if ซ้อน if)</h2>
            <h3>Nested If คือการใส่คำสั่ง if ไว้ภายในคำสั่ง if อื่น เพื่อตรวจสอบเงื่อนไขที่ซับซ้อนมากขึ้น</h3>
            <p>ตัวอย่าง Nested If : </p>
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
                <span style={{color: '#e5eaeeff'}}>age = </span><span style={{color: '#7a4b4bff'}}>20</span>
                {"\n"}<span style={{color: '#e5eaeeff'}}>has_license = </span><span style={{color: '#569CD6'}}>True</span>
                {"\n"}<span style={{color: '#569CD6'}}>if</span><span style={{color: '#e5eaeeff'}}> age</span> &gt;= <span style={{color: '#7a4b4bff'}}>18</span>:  
                {"\n"}  <span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"คุณเป็นผู้ใหญ่"</span>)
                {"\n"}  <span style={{color: '#569CD6'}}>if</span><span style={{color: '#e5eaeeff'}}> has_license</span>:
                {"\n"}      <span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"คุณขับรถได้"</span>)
                {"\n"}  <span style={{color: '#569CD6'}}>else</span>:  
                {"\n"}      <span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"คุณต้องมีใบขับขี่ก่อน"</span>)
                {"\n"}<span style={{color: '#569CD6'}}>else</span>:  
                {"\n"}  <span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}>"คุณยังเด็กเกินไป"</span>)
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
{`คุณเป็นผู้ใหญ่
คุณขับรถได้`}
            </div>
            <hr/>
            <h2> Ternary Operator (เงื่อนไขแบบสั้น)</h2>
            <h3>ตัวอย่างการทำงาน :</h3>
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
                <span style={{color: '#e5eaeeff'}}>age = </span><span style={{color: '#7a4b4bff'}}>20</span>
                {"\n"}<span style={{color: '#e5eaeeff'}}>status = </span><span style={{color: '#D69D85'}}>"ผู้ใหญ่"</span><span style={{color: '#569CD6'}}> if</span><span style={{color: '#e5eaeeff'}}> age</span> &gt;= <span style={{color: '#7a4b4bff'}}>18</span><span style={{color: '#569CD6'}}> else</span>(<span style={{color: '#D69D85'}}>"เด็ก"</span>)  
                {"\n"}<span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#D69D85'}}><span style={{color: '#569CD6'}}>f</span>"คุณเป็น : <span style={{color: '#e5eaeeff'}}>{status}</span>"</span>)
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
{`คุณเป็น : ผู้ใหญ่`}
            </div>
            <hr/>
            <h2>ข้อควรจำสำคัญ</h2>
            <h3>Syntax (รูปแบบ)</h3>
            <p>- ใช้ : หลังเงื่อนไข</p>
            <p>- ใช้ indentation (เว้นวรรค 4 ช่อง) สำหรับโค้ดในเงื่อนไข</p>
            <br/>
            <h3>Nested If</h3>
            <p>- ต้องเว้นวรรคเพิ่มทีละชั้น</p>
            <p>- สามารถซ้อนได้หลายชั้น แต่ไม่ควรมากเกินไป (3-4 ชั้น)</p>
            <br/>
            <h3>การเปรียบเทียบ</h3>
            <p>- ใช้ == สำหรับเปรียบเทียบ (ไม่ใช่ =)</p>
            <p>- ใช้ != สำหรับไม่เท่ากับ</p>
            <hr/>
            <h2>แนวทางการปฏิบัติที่ดี</h2>
            <h3>- หลีกเลี่ยง Nested If ที่ซับซ้อนเกินไป</h3>
            <h3>- ใช้ elif แทน else if</h3>
            <h3>- ใช้ Ternary Operator สำหรับเงื่อนไขง่ายๆ</h3>
        </div>
    )
}