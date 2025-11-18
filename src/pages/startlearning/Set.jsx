export default function Set() {
    return (
        <div className="page-content">
            <h1>Set และฟังก์ชันเกี่ยวกับ Set ใน Python</h1>
            <hr />

            <h2>Set คืออะไร?</h2>
            <p>
                <b>Set</b> คือโครงสร้างข้อมูลชนิดหนึ่งใน Python ที่ใช้เก็บค่าหลายค่าโดย
                <b>ไม่มีลำดับ</b> และ <b>ไม่มีค่าที่ซ้ำกัน</b>  
                มักใช้ในกรณีที่ต้องการตรวจสอบความซ้ำของข้อมูลหรือหาความสัมพันธ์ระหว่างชุดข้อมูล
            </p>

            <div className="sizecode" style={{
                backgroundColor: '#1e1e1ed8',
                color: '#d4d4d4',
                padding: '16px',
                borderRadius: '8px',
                fontFamily: 'monospace',
                whiteSpace: 'pre',
                lineHeight: '1.5',
                textAlign:"start",
            }}>
<span style={{color: '#7cad5aff'}}># การสร้าง Set</span>
{"\n"}my_set = {`{`}<span style={{color: '#D69D85'}}>'apple'</span>, <span style={{color: '#D69D85'}}>'banana'</span>, <span style={{color: '#D69D85'}}>'cherry'</span>{`}`}
{"\n"}<span style={{color: '#569CD6'}}>print</span>(my_set)
            </div>

            <p>ผลลัพธ์ (ลำดับอาจเปลี่ยนได้):</p>
            <div className="sizecode" style={{
                backgroundColor: '#111',
                color: '#9cdcfe',
                padding: '12px',
                borderRadius: '8px',
                fontFamily: 'monospace',
                whiteSpace: 'pre',
                lineHeight: '1.5',
                textAlign:"start",
            }}>
{`{'banana', 'apple', 'cherry'}`}
            </div>

            <hr />
            <h2>การเพิ่มและลบข้อมูลใน Set</h2>
            <div className="sizecode" style={{
                backgroundColor: '#1e1e1ed8',
                color: '#d4d4d4',
                padding: '16px',
                borderRadius: '8px',
                fontFamily: 'monospace',
                whiteSpace: 'pre',
                lineHeight: '1.5',
                textAlign:"start",
            }}>
my_set = {`{`}<span style={{color: '#D69D85'}}>'apple'</span>, <span style={{color: '#D69D85'}}>'banana'</span>{`}`}
{"\n"}my_set.<span style={{color: '#569CD6'}}>add</span>(<span style={{color: '#D69D85'}}>'cherry'</span>)
{"\n"}my_set.<span style={{color: '#569CD6'}}>remove</span>(<span style={{color: '#D69D85'}}>'banana'</span>)
{"\n"}<span style={{color: '#569CD6'}}>print</span>(my_set)
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
                textAlign:"start",
            }}>
{`{'apple', 'cherry'}`}
            </div>

            <hr />
            <h2>การวนลูปใน Set</h2>
            <div className="sizecode" style={{
                backgroundColor: '#1e1e1ed8',
                color: '#d4d4d4',
                padding: '16px',
                borderRadius: '8px',
                fontFamily: 'monospace',
                whiteSpace: 'pre',
                lineHeight: '1.5',
                textAlign:"start",
            }}>
fruits = {`{`}<span style={{color: '#D69D85'}}>'apple'</span>, <span style={{color: '#D69D85'}}>'banana'</span>, <span style={{color: '#D69D85'}}>'cherry'</span>{`}`}
{"\n"}<span style={{color: '#569CD6'}}>for</span> fruit <span style={{color: '#569CD6'}}>in</span> fruits:
{"\n"}    <span style={{color: '#569CD6'}}>print</span>(fruit)
            </div>

            <p>ผลลัพธ์ (ลำดับไม่แน่นอน):</p>
            <div className="sizecode" style={{
                backgroundColor: '#111',
                color: '#9cdcfe',
                padding: '12px',
                borderRadius: '8px',
                fontFamily: 'monospace',
                whiteSpace: 'pre',
                lineHeight: '1.5',
                textAlign:"start",
            }}>
{`apple
banana
cherry`}
            </div>

            <hr />
            <h2>การดำเนินการระหว่าง Set</h2>
            <p>Python มีเครื่องมือในการรวม หาร่วม และหาความแตกต่างของ Set ได้ง่ายมาก เช่น:</p>

            <h3>1. Union (การรวมกัน)</h3>
            <div className="sizecode" style={{
                backgroundColor: '#1e1e1ed8',
                color: '#d4d4d4',
                padding: '16px',
                borderRadius: '8px',
                fontFamily: 'monospace',
                whiteSpace: 'pre',
                lineHeight: '1.5',
                textAlign:"start",
            }}>
set1 = {`{`}<span style={{color: '#D69D85'}}>'A'</span>, <span style={{color: '#D69D85'}}>'B'</span>{`}`}
{"\n"}set2 = {`{`}<span style={{color: '#D69D85'}}>'B'</span>, <span style={{color: '#D69D85'}}>'C'</span>{`}`}
{"\n"}result = set1.<span style={{color: '#569CD6'}}>union</span>(set2)
{"\n"}<span style={{color: '#569CD6'}}>print</span>(result)
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
                textAlign:"start",
            }}>
{`{'A', 'B', 'C'}`}
            </div>

            <hr />
            <h3>2. Intersection (ค่าที่เหมือนกัน)</h3>
            <div className="sizecode" style={{
                backgroundColor: '#1e1e1ed8',
                color: '#d4d4d4',
                padding: '16px',
                borderRadius: '8px',
                fontFamily: 'monospace',
                whiteSpace: 'pre',
                lineHeight: '1.5',
                textAlign:"start",
            }}>
set1 = {`{`}<span style={{color: '#D69D85'}}>'A'</span>, <span style={{color: '#D69D85'}}>'B'</span>{`}`}
{"\n"}set2 = {`{`}<span style={{color: '#D69D85'}}>'B'</span>, <span style={{color: '#D69D85'}}>'C'</span>{`}`}
{"\n"}result = set1.<span style={{color: '#569CD6'}}>intersection</span>(set2)
{"\n"}<span style={{color: '#569CD6'}}>print</span>(result)
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
                textAlign:"start",
            }}>
{`{'B'}`}
            </div>

            <hr />
            <h3>3. Difference (ค่าที่ไม่เหมือนกัน)</h3>
            <div className="sizecode" style={{
                backgroundColor: '#1e1e1ed8',
                color: '#d4d4d4',
                padding: '16px',
                borderRadius: '8px',
                fontFamily: 'monospace',
                whiteSpace: 'pre',
                lineHeight: '1.5',
                textAlign:"start",
            }}>
set1 = {`{`}<span style={{color: '#D69D85'}}>'A'</span>, <span style={{color: '#D69D85'}}>'B'</span>{`}`}
{"\n"}set2 = {`{`}<span style={{color: '#D69D85'}}>'B'</span>, <span style={{color: '#D69D85'}}>'C'</span>{`}`}
{"\n"}result = set1.<span style={{color: '#569CD6'}}>difference</span>(set2)
{"\n"}<span style={{color: '#569CD6'}}>print</span>(result)
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
                textAlign:"start",
            }}>
{`{'A'}`}
            </div>

            <hr />
            <h2>ฟังก์ชันที่ใช้บ่อยใน Set</h2>
            <table className="sizetable" style={{
                width: '100%',
                borderCollapse: 'collapse',
                marginTop: '16px',
                textAlign: 'left'
            }}>
                <thead>
                    <tr style={{ backgroundColor: '#0078d7', color: '#fff' }}>
                        <th style={{ padding: '8px', border: '1px solid #ccc' }}>ฟังก์ชัน</th>
                        <th style={{ padding: '8px', border: '1px solid #ccc' }}>คำอธิบาย</th>
                        <th style={{ padding: '8px', border: '1px solid #ccc' }}>ตัวอย่าง</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>add()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>เพิ่มข้อมูลใหม่ใน Set</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>myset.add('x')</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>remove()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>ลบข้อมูลออกจาก Set</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>myset.remove('x')</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>union()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>รวมข้อมูลจากหลาย Set</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>A.union(B)</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>intersection()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>หาค่าที่เหมือนกัน</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>A.intersection(B)</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>difference()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>หาค่าที่แตกต่าง</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>A.difference(B)</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
