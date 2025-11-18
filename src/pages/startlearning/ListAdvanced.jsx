export default function ListAdvance() {
    return (
        <div className="page-content">
            <h1>List Comprehension และฟังก์ชันขั้นสูงของ List ใน Python</h1>
            <hr />

            <h2>List Comprehension</h2>
            <p>
                <span className="operator-symbol">List Comprehension</span> ใช้สร้าง List ใหม่จาก List เดิมอย่างรวดเร็ว
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
<span style={{color: '#7cad5aff'}}># สร้าง List ของเลขกำลังสอง</span>
{"\n"}squares = [x**<span style={{color: '#7a4b4bff'}}>2</span> <span style={{color: '#569CD6'}}>for</span> x <span style={{color: '#569CD6'}}>in range</span>(<span style={{color: '#7a4b4bff'}}>1</span>, <span style={{color: '#7a4b4bff'}}>6</span>)]
{"\n"}<span style={{color: '#569CD6'}}>print</span>(squares)
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
{`[1, 4, 9, 16, 25]`}
            </div>

            <hr />
            <h2>List Comprehension พร้อมเงื่อนไข</h2>
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
<span style={{color: '#7cad5aff'}}># เลือกเลขคู่จาก 1 ถึง 10</span>
{"\n"}even_numbers = [x <span style={{color: '#569CD6'}}>for</span> x <span style={{color: '#569CD6'}}>in range</span>(<span style={{color: '#7a4b4bff'}}>1</span>,<span style={{color: '#7a4b4bff'}}>11</span>) <span style={{color: '#569CD6'}}>if</span> x%<span style={{color: '#7a4b4bff'}}>2</span> == <span style={{color: '#7a4b4bff'}}>0</span>]
{"\n"}<span style={{color: '#569CD6'}}>print</span>(even_numbers)
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
{`[2, 4, 6, 8, 10]`}
            </div>

            <hr />
            <h2>ฟังก์ชันขั้นสูงของ List</h2>
            <p>ตัวอย่างฟังก์ชัน built-in ที่ใช้กับ List</p>

            <h3>1.<span className="operator-symbol">sum()</span> - หาผลรวม</h3>
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
numbers = [<span style={{color: '#7a4b4bff'}}>1</span>, <span style={{color: '#7a4b4bff'}}>2</span>, <span style={{color: '#7a4b4bff'}}>3</span>, <span style={{color: '#7a4b4bff'}}>4</span>, <span style={{color: '#7a4b4bff'}}>5</span>]
{"\n"}total = <span style={{color: '#569CD6'}}>sum</span>(numbers)
{"\n"}<span style={{color: '#569CD6'}}>print</span>(total)
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
{`15`}
            </div>

            <hr />
            <h3>2. <span className="operator-symbol">max()</span> / <span className="operator-symbol">min()</span> - หาค่าสูงสุด / ต่ำสุด</h3>
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
numbers = [<span style={{color: '#7a4b4bff'}}>5</span>, <span style={{color: '#7a4b4bff'}}>1</span>, <span style={{color: '#7a4b4bff'}}>9</span>, <span style={{color: '#7a4b4bff'}}>2</span>]
{"\n"}<span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#569CD6'}}>max</span>(numbers))
{"\n"}<span style={{color: '#569CD6'}}>print</span>(<span style={{color: '#569CD6'}}>min</span>(numbers))
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
{`9
1`}
            </div>

            <hr />
            <h3>3.<span className="operator-symbol">map()</span> - ใช้ฟังก์ชันกับทุกค่าใน List</h3>
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
numbers = [<span style={{color: '#7a4b4bff'}}>1</span>, <span style={{color: '#7a4b4bff'}}>2</span>, <span style={{color: '#7a4b4bff'}}>3</span>]
{"\n"}squared = <span style={{color: '#569CD6'}}>list</span>(<span style={{color: '#569CD6'}}>map</span>(<span style={{color: '#569CD6'}}>lambda</span> x: x**<span style={{color: '#7a4b4bff'}}>2</span>, numbers))
{"\n"}<span style={{color: '#569CD6'}}>print</span>(squared)
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
{`[1, 4, 9]`}
            </div>

            <hr />
            <h3>4.<span className="operator-symbol">filter()</span> - กรองค่าตามเงื่อนไข</h3>
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
numbers = [<span style={{color: '#7a4b4bff'}}>1</span>, <span style={{color: '#7a4b4bff'}}>2</span>, <span style={{color: '#7a4b4bff'}}>3</span>, <span style={{color: '#7a4b4bff'}}>4</span>, <span style={{color: '#7a4b4bff'}}>5</span>]
{"\n"}even_numbers=<span style={{color: '#569CD6'}}>list</span>(<span style={{color: '#569CD6'}}>filter</span>(<span style={{color: '#569CD6'}}>lambda</span> x:x%<span style={{color: '#7a4b4bff'}}>2</span>==<span style={{color: '#7a4b4bff'}}>0</span>,numbers))
{"\n"}<span style={{color: '#569CD6'}}>print</span>(even_numbers)
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
{`[2, 4]`}
            </div>

            <hr />
            <h3>5.<span className="operator-symbol">zip()</span> - รวม List หลายตัว</h3>
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
names = [<span style={{color: '#D69D85'}}>"A"</span>, <span style={{color: '#D69D85'}}>"B"</span>, <span style={{color: '#D69D85'}}>"C"</span>]
{"\n"}scores = [<span style={{color: '#7a4b4bff'}}>90</span>, <span style={{color: '#7a4b4bff'}}>80</span>, <span style={{color: '#7a4b4bff'}}>70</span>]
{"\n"}combined = <span style={{color: '#569CD6'}}>list</span>(<span style={{color: '#569CD6'}}>zip</span>(names, scores))
{"\n"}<span style={{color: '#569CD6'}}>print</span>(combined)
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
{`[('A', 90), ('B', 80), ('C', 70)]`}
            </div>

            <hr />
            <h2>ตารางสรุปฟังก์ชันขั้นสูง</h2>
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
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>List Comprehension</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>สร้าง List ใหม่จาก List เดิม</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>[x**2 for x in range(1,6)]</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>sum()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>ผลรวมของ List</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>sum([1,2,3])</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>max()/min()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>หาค่าสูงสุด / ต่ำสุด</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>max([1,2,3])</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>map()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>ใช้ฟังก์ชันกับทุกค่าใน List</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>list(map(lambda x:x**2,[1,2,3]))</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>filter()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>กรองค่าตามเงื่อนไข</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>list(filter(lambda x:x%2==0,[1,2,3,4]))</td>
                    </tr>
                    <tr>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>zip()</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>รวมหลาย List เป็นคู่</td>
                        <td style={{ padding: '8px', border: '1px solid #ccc' }}>list(zip([1,2],[3,4]))</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
