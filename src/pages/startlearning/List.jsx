export default function List() {
    return (
        <div className="page-content">
            <h1>List และฟังก์ชันจัดการ List ใน Python</h1>
            <hr />

            <h2>List คืออะไร?</h2>
            <p>
                <span className="operator-symbol">List</span> เป็นโครงสร้างข้อมูลชนิดหนึ่งใน Python 
                ใช้เก็บชุดข้อมูลหลายค่า สามารถเปลี่ยนแปลงค่าได้และจัดเรียงลำดับ
            </p>

            <hr />
            <h3>การสร้าง List</h3>
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
my_list = [<span style={{color: '#7a4b4bff'}}>1</span>, <span style={{color: '#7a4b4bff'}}>2</span>, <span style={{color: '#7a4b4bff'}}>3</span>]
{"\n"}<span style={{color: '#569CD6'}}>print</span>(my_list)
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
{`[1, 2, 3]`}
            </div>

            <hr />
            <h3>1. เพิ่มค่าเข้า List (<span className="operator-symbol">append()</span>)</h3>
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
my_list = [<span style={{color: '#7a4b4bff'}}>1</span>, <span style={{color: '#7a4b4bff'}}>2</span>, <span style={{color: '#7a4b4bff'}}>3</span>]
{"\n"}my_list.<span style={{color: '#569CD6'}}>append</span>(<span style={{color: '#7a4b4bff'}}>4</span>)
{"\n"}<span style={{color: '#569CD6'}}>print</span>(my_list)
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
{`[1, 2, 3, 4]`}
            </div>

            <hr />
            <h3>2. แทรกค่าในตำแหน่งที่ต้องการ (<span className="operator-symbol">insert()</span>)</h3>
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
my_list = [<span style={{color: '#7a4b4bff'}}>1</span>, <span style={{color: '#7a4b4bff'}}>2</span>, <span style={{color: '#7a4b4bff'}}>3</span>]
{"\n"}my_list.<span style={{color: '#569CD6'}}>insert</span>(<span style={{color: '#7a4b4bff'}}>1</span>, <span style={{color: '#7a4b4bff'}}>10</span>)  <span style={{color: '#7cad5aff'}}># แทรก 10 ที่ index 1</span>
{"\n"}<span style={{color: '#569CD6'}}>print</span>(my_list)
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
{`[1, 10, 2, 3]`}
            </div>

            <hr />
            <h3>3. ลบค่าออกจาก List (<span className="operator-symbol">remove()</span>)</h3>
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
my_list = [<span style={{color: '#7a4b4bff'}}>1</span>, <span style={{color: '#7a4b4bff'}}>2</span>, <span style={{color: '#7a4b4bff'}}>3</span>, <span style={{color: '#7a4b4bff'}}>2</span>]
{"\n"}my_list.<span style={{color: '#569CD6'}}>remove</span>(<span style={{color: '#7a4b4bff'}}>2</span>)  <span style={{color: '#7cad5aff'}}># ลบตัวแรกที่เจอ 2</span>
{"\n"}<span style={{color: '#569CD6'}}>print</span>(my_list)
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
{`[1, 3, 2]`}
            </div>

            <hr />
            <h3>4. ดึงค่าออกตามตำแหน่ง (<span className="operator-symbol">pop()</span>)</h3>
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
my_list = [<span style={{color: '#7a4b4bff'}}>1</span>, <span style={{color: '#7a4b4bff'}}>2</span>, <span style={{color: '#7a4b4bff'}}>3</span>]
{"\n"}removed = my_list.<span style={{color: '#569CD6'}}>pop</span>(<span style={{color: '#7a4b4bff'}}>1</span>)  <span style={{color: '#7cad5aff'}}># ดึงค่า index 1</span>
{"\n"}<span style={{color: '#569CD6'}}>print</span>(removed)
{"\n"}<span style={{color: '#569CD6'}}>print</span>(my_list)
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
{`2
[1, 3]`}
            </div>

            <hr />
            <h3>5. นับจำนวนค่า (<span className="operator-symbol">count()</span>)</h3>
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
my_list = [<span style={{color: '#7a4b4bff'}}>1</span>, <span style={{color: '#7a4b4bff'}}>2</span>, <span style={{color: '#7a4b4bff'}}>2</span>, <span style={{color: '#7a4b4bff'}}>3</span>, <span style={{color: '#7a4b4bff'}}>2</span>]
{"\n"}<span style={{color: '#569CD6'}}>print</span>(my_list.<span style={{color: '#569CD6'}}>count</span>(<span style={{color: '#7a4b4bff'}}>2</span>))
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
{`3`}
            </div>

            <hr />
            <h3>6. เรียงค่าจากน้อยไปมาก (<span className="operator-symbol">sort()</span>)</h3>
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
my_list = [<span style={{color: '#7a4b4bff'}}>3</span>, <span style={{color: '#7a4b4bff'}}>1</span>, <span style={{color: '#7a4b4bff'}}>2</span>]
{"\n"}my_list.<span style={{color: '#569CD6'}}>sort</span>()
{"\n"}<span style={{color: '#569CD6'}}>print</span>(my_list)
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
{`[1, 2, 3]`}
            </div>

            <hr />
            <h3>7. ย้อนลำดับ List (<span className="operator-symbol">reverse()</span>)</h3>
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
my_list = [<span style={{color: '#7a4b4bff'}}>1</span>, <span style={{color: '#7a4b4bff'}}>2</span>, <span style={{color: '#7a4b4bff'}}>3</span>]
{"\n"}my_list.<span style={{color: '#569CD6'}}>reverse</span>()
{"\n"}<span style={{color: '#569CD6'}}>print</span>(my_list)
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
{`[3, 2, 1]`}
            </div>

            <hr />
            <h2>ตารางสรุปฟังก์ชัน List</h2>
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
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>append()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>เพิ่มค่าเข้า List ที่ท้าย</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>my_list.append(4)</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>insert()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>แทรกค่าที่ตำแหน่งกำหนด</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>my_list.insert(1, 10)</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>remove()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>ลบค่าตามที่กำหนด (ค่าตัวแรกที่เจอ)</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>my_list.remove(2)</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>pop()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>ลบค่าออกตาม index และคืนค่า</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>removed = my_list.pop(1)</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>count()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>นับจำนวนค่าที่ปรากฏใน List</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>my_list.count(2)</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>sort()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>เรียงค่าจากน้อยไปมาก</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>my_list.sort()</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>reverse()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>กลับลำดับ List</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>my_list.reverse()</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
