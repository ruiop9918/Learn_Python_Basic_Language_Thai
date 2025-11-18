export default function Tuple() {
    return (
        <div className="page-content">
            <h1>Tuple และฟังก์ชันเกี่ยวกับ Tuple ใน Python</h1>
            <hr />

            <h2>Tuple คืออะไร?</h2>
            <p>
                <span className="operator-symbol">Tuple</span> เป็นโครงสร้างข้อมูลที่คล้ายกับ List
                แต่แตกต่างตรงที่ข้อมูลภายใน <b>ไม่สามารถแก้ไขได้ (immutable)</b>  
                นิยมใช้เก็บข้อมูลที่ไม่ต้องการเปลี่ยนแปลง เช่น ค่าคงที่ หรือข้อมูลตำแหน่ง (x, y)
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
<span style={{color: '#7cad5aff'}}># การสร้าง Tuple</span>
{"\n"}my_tuple = (<span style={{color: '#D69D85'}}>'apple'</span>, <span style={{color: '#D69D85'}}>'banana'</span>, <span style={{color: '#D69D85'}}>'cherry'</span>)
{"\n"}<span style={{color: '#569CD6'}}>print</span>(my_tuple)
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
{`('apple', 'banana', 'cherry')`}
            </div>

            <hr />
            <h2>การเข้าถึงข้อมูลใน Tuple</h2>
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
my_tuple = (<span style={{color: '#D69D85'}}>'A'</span>, <span style={{color: '#D69D85'}}>'B'</span>, <span style={{color: '#D69D85'}}>'C'</span>)
{"\n"}<span style={{color: '#569CD6'}}>print</span>(my_tuple[<span style={{color: '#7a4b4bff'}}>0</span>])  
{"\n"}<span style={{color: '#569CD6'}}>print</span>(my_tuple[-<span style={{color: '#7a4b4bff'}}>1</span>])
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
{`A
C`}
            </div>

            <hr />
            <h2>การวนลูปใน Tuple</h2>
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
fruits = (<span style={{color: '#D69D85'}}>'apple'</span>, <span style={{color: '#D69D85'}}>'banana'</span>, <span style={{color: '#D69D85'}}>'cherry'</span>)
{"\n"}<span style={{color: '#569CD6'}}>for</span> fruit <span style={{color: '#569CD6'}}>in</span> fruits:
{"\n"}    <span style={{color: '#569CD6'}}>print</span>(fruit)
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
{`apple
banana
cherry`}
            </div>

            <hr />
            <h2>ฟังก์ชันที่ใช้กับ Tuple</h2>

            <h3>1.<span className="operator-symbol">len()</span> - หาความยาว Tuple</h3>
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
t = (<span style={{color: '#D69D85'}}>'a'</span>, <span style={{color: '#D69D85'}}>'b'</span>, <span style={{color: '#D69D85'}}>'c'</span>)
{"\n"}<span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#569CD6'}}>len</span>(t))
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
            <h3>2.<span className="operator-symbol">count()</span> - นับจำนวนค่าที่ซ้ำ</h3>
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
t = (<span style={{color: '#D69D85'}}>'a'</span>, <span style={{color: '#D69D85'}}>'b'</span>, <span style={{color: '#D69D85'}}>'a'</span>)
{"\n"}<span style={{color: '#569CD6'}}>print</span>(t.<span style={{color: '#569CD6'}}>count</span>(<span style={{color: '#D69D85'}}>'a'</span>))
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
{`2`}
            </div>

            <hr />
            <h3>3.<span className="operator-symbol">index()</span> - หาตำแหน่งของข้อมูล</h3>
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
t = (<span style={{color: '#D69D85'}}>'x'</span>, <span style={{color: '#D69D85'}}>'y'</span>, <span style={{color: '#D69D85'}}>'z'</span>)
{"\n"}<span style={{color: '#569CD6'}}>print</span>(t.<span style={{color: '#569CD6'}}>index</span>(<span style={{color: '#D69D85'}}>'y'</span>))
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
{`1`}
            </div>

            <hr />
            <h2>การแปลงระหว่าง Tuple และ List</h2>
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
my_list = [<span style={{color: '#D69D85'}}>'A'</span>, <span style={{color: '#D69D85'}}>'B'</span>, <span style={{color: '#D69D85'}}>'C'</span>]
{"\n"}my_tuple = <span style={{color: '#569CD6'}}>tuple</span>(my_list)
{"\n"}<span style={{color: '#569CD6'}}>print</span>(my_tuple)
{"\n"}<span style={{color: '#7cad5aff'}}># แปลงกลับเป็น list</span>
{"\n"}new_list = <span style={{color: '#569CD6'}}>list</span>(my_tuple)
{"\n"}<span style={{color: '#569CD6'}}>print</span>(new_list)
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
{`('A', 'B', 'C')
['A', 'B', 'C']`}
            </div>

            <hr />
            <h2>ตารางสรุปฟังก์ชัน Tuple ที่ใช้บ่อย</h2>
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
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>len()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>คืนค่าความยาวของ Tuple</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>len((1,2,3)) → 3</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>count()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>นับจำนวนค่าที่ซ้ำ</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>(1,2,1).count(1) → 2</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>index()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>คืนค่าตำแหน่งของข้อมูล</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>(10,20,30).index(20) → 1</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>tuple()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>แปลงจาก list → tuple</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>tuple([1,2,3]) → (1,2,3)</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
