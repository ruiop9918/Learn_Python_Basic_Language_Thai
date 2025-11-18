export default function OOP() {
    const a ="{self.name}";
    const b ="{self.age}";
    const c ="{self.x}";
    const d ="{self.y}";
  return (
    <div className="page-content">
      <h1>พื้นฐาน OOP ใน Python </h1>
      <hr />

      <h2>Class และ Object</h2>
      <p>
        <span className="operator-symbol">Class</span> คือแม่แบบ, <span className="operator-symbol">Object</span> คือ instance ของคลาส
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
<span style={{color:'#7cad5aff'}}># ตัวอย่าง Class และ Object</span>
{"\n"}<span style={{color:'#569CD6'}}>class</span> <span style={{color:'#086d2fff'}}>Dog</span>:
{"\n"}    <span style={{color:'#569CD6'}}>def</span> __init__(self, name):
{"\n"}        self.name = <span style={{color:'#569CD6'}}>name</span>
{"\n"}    <span style={{color:'#569CD6'}}>def</span> bark(self):
{"\n"}        <span style={{color:'#569CD6'}}>print</span>(<span style={{color:'#569CD6'}}>f</span>"{a} <span style={{color:'#D69D85'}}>says Woof!</span>")
{"\n"}
{"\n"}d = <span style={{color:'#086d2fff'}}>Dog</span>(<span style={{color:'#D69D85'}}>"Lucky"</span>)
{"\n"}d.bark()
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
{`Lucky says Woof!`}
      </div>

      <hr />
      <h2>Inheritance (การสืบทอด)</h2>
      <p>
        คลาสลูกสามารถสืบทอดฟังก์ชันและตัวแปรจากคลาสแม่
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
<span style={{color:'#7cad5aff'}}># ตัวอย่าง Inheritance</span>
{"\n"}<span style={{color:'#569CD6'}}>class</span> <span style={{color:'#086d2fff'}}>Animal</span>:
{"\n"}    <span style={{color:'#569CD6'}}>def</span> speak(self):
{"\n"}        <span style={{color:'#569CD6'}}>print</span>(<span style={{color:'#D69D85'}}>"Animal speaks"</span>)
{"\n"}
{"\n"}<span style={{color:'#569CD6'}}>class</span> <span style={{color:'#086d2fff'}}>Cat</span>(<span style={{color:'#086d2fff'}}>Animal</span>):
{"\n"}    <span style={{color:'#569CD6'}}>def</span> speak(self):
{"\n"}        <span style={{color:'#569CD6'}}>print</span>(<span style={{color:'#D69D85'}}>"Meow!"</span>)
{"\n"}
{"\n"}c = <span style={{color:'#086d2fff'}}>Cat</span>()
{"\n"}c.speak()
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
{`Meow!`}
      </div>

      <hr />
      <h2>Polymorphism (หลายรูปแบบ)</h2>
      <p>ฟังก์ชันเดียวกันสามารถทำงานกับ Object หลายชนิด</p>

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
<span style={{color:'#7cad5aff'}}># ตัวอย่าง Polymorphism</span>
{"\n"}<span style={{color:'#569CD6'}}>class</span> <span style={{color:'#086d2fff'}}>Bird</span>:
{"\n"}    <span style={{color:'#569CD6'}}>def</span> fly(self):
{"\n"}        <span style={{color:'#569CD6'}}>print</span>(<span style={{color:'#D69D85'}}>"Bird is flying"</span>)
{"\n"}
{"\n"}<span style={{color:'#569CD6'}}>class</span> <span style={{color:'#086d2fff'}}>Airplane</span>:
{"\n"}    <span style={{color:'#569CD6'}}>def</span> fly(self):
{"\n"}        <span style={{color:'#569CD6'}}>print</span>(<span style={{color:'#D69D85'}}>"Airplane is flying"</span>)
{"\n"}
{"\n"}<span style={{color:'#569CD6'}}>def</span> lets_fly(obj):
{"\n"}    obj.fly()
{"\n"}
{"\n"}b = <span style={{color:'#086d2fff'}}>Bird</span>()
{"\n"}a = <span style={{color:'#086d2fff'}}>Airplane</span>()
{"\n"}lets_fly(b)
{"\n"}lets_fly(a)
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
{`Bird is flying
Airplane is flying`}
      </div>

      <hr />
      <h2>ฟังก์ชันพิเศษและ Operator Overloading</h2>

      <h3>1. <span className="operator-symbol">__str__</span> และ <span className="operator-symbol">__repr__</span></h3>
      <p>ปรับการแสดงผลของ Object</p>
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
<span style={{color:'#7cad5aff'}}># ตัวอย่าง __str__</span>
{"\n"}<span style={{color:'#569CD6'}}>class</span> <span style={{color:'#086d2fff'}}>Person</span>:
{"\n"}    <span style={{color:'#569CD6'}}>def</span> __init__(self, name, age):
{"\n"}        self.name = <span style={{color:'#569CD6'}}>name</span>
{"\n"}        self.age = <span style={{color:'#569CD6'}}>age</span>
{"\n"}
{"\n"}    <span style={{color:'#569CD6'}}>def</span> __str__(self):
{"\n"}        <span style={{color:'#569CD6'}}>return</span> <span style={{color:'#569CD6'}}>f</span>"{a}, {b} <span style={{color:'#D69D85'}}>years old</span>"
{"\n"}
{"\n"}p = <span style={{color:'#086d2fff'}}>Person</span>(<span style={{color:'#D69D85'}}>"Alice"</span>, <span style={{color:'#7a4b4bff'}}>25</span>)
{"\n"}<span style={{color:'#569CD6'}}>print</span>(p)
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
{`Alice, 25 years old`}
      </div>

      <h3>2. Operator Overloading</h3>
      <p>ปรับพฤติกรรม <span className="operator-symbol">operator (+, -, *, ...)</span> กับ Object</p>
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
<span style={{color:'#7cad5aff'}}># ตัวอย่าง Operator Overloading</span>
{"\n"}<span style={{color:'#569CD6'}}>class</span> <span style={{color:'#086d2fff'}}>Vector</span>:
{"\n"}    <span style={{color:'#569CD6'}}>def</span> __init__(self, x, y):
{"\n"}        self.x = <span style={{color:'#7a4b4bff'}}>x</span>
{"\n"}        self.y = <span style={{color:'#7a4b4bff'}}>y</span>
{"\n"}
{"\n"}    <span style={{color:'#569CD6'}}>def</span> __add__(self, other):
{"\n"}        <span style={{color:'#569CD6'}}>return</span> <span style={{color:'#086d2fff'}}>Vector</span>(self.x+other.x,self.y+other.y)
{"\n"}
{"\n"}    <span style={{color:'#569CD6'}}>def</span> __str__(self):
{"\n"}        <span style={{color:'#569CD6'}}>return</span> <span style={{color:'#569CD6'}}>f</span>"({c}, {d})"
{"\n"}
{"\n"}v1 = <span style={{color:'#086d2fff'}}>Vector</span>(<span style={{color:'#7a4b4bff'}}>2</span>, <span style={{color:'#7a4b4bff'}}>3</span>)
{"\n"}v2 = <span style={{color:'#086d2fff'}}>Vector</span>(<span style={{color:'#7a4b4bff'}}>4</span>, <span style={{color:'#7a4b4bff'}}>5</span>)
{"\n"}v3 = v1 + v2
{"\n"}<span style={{color:'#569CD6'}}>print</span>(v3)
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
{`(6, 8)`}
      </div>

      <hr />
      <h2>Static Method และ Class Method</h2>

      <h3>1. Static Method</h3>
      <p>ฟังก์ชันที่ไม่เข้าถึง instance ใช้  @staticmethod</p>
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
<span style={{color:'#7cad5aff'}}># ตัวอย่าง Static Method</span>
{"\n"}<span style={{color:'#569CD6'}}>class</span> <span style={{color:'#086d2fff'}}>MathUtils</span>:
{"\n"}    <span style={{color:'#086d2fff'}}>@staticmethod</span>
{"\n"}    <span style={{color:'#569CD6'}}>def</span> add(a, b):
{"\n"}        <span style={{color:'#569CD6'}}>return</span> a + b
{"\n"}
{"\n"}<span style={{color:'#569CD6'}}>print</span>(<span style={{color:'#086d2fff'}}>MathUtils</span>.add(<span style={{color:'#7a4b4bff'}}>5</span>, <span style={{color:'#7a4b4bff'}}>7</span>))
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
{`12`}
      </div>

      <h3>2. Class Method</h3>
      <p>ฟังก์ชันที่เข้าถึงคลาส ใช้ @classmethod และ cls</p>
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
<span style={{color:'#7cad5aff'}}># ตัวอย่าง Class Method</span>
{"\n"}<span style={{color:'#569CD6'}}>class</span> <span style={{color:'#086d2fff'}}>Person</span>:
{"\n"}    count = <span style={{color:'#7a4b4bff'}}>0</span>
{"\n"}    <span style={{color:'#569CD6'}}>def</span> __init__(self, name):
{"\n"}        self.name = name
{"\n"}        <span style={{color:'#086d2fff'}}>Person</span>.count += <span style={{color:'#7a4b4bff'}}>1</span>
{"\n"}
{"\n"}    <span style={{color:'#086d2fff'}}>@classmethod</span>
{"\n"}    <span style={{color:'#569CD6'}}>def</span> get_count(cls):
{"\n"}        <span style={{color:'#569CD6'}}>return</span> cls.count
{"\n"}
{"\n"}p1 = <span style={{color:'#086d2fff'}}>Person</span>(<span style={{color:'#D69D85'}}>"Alice"</span>)
{"\n"}p2 = <span style={{color:'#086d2fff'}}>Person</span>(<span style={{color:'#D69D85'}}>"Bob"</span>)
{"\n"}<span style={{color:'#569CD6'}}>print</span>(Person.get_count())
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
      <h2>Getter และ Setter Method</h2>
      <p>ใช้ @property สำหรับ getter และ @property_name.setter สำหรับ setter</p>
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
<span style={{color:'#7cad5aff'}}># ตัวอย่าง Getter / Setter</span>
{"\n"}<span style={{color:'#569CD6'}}>class</span> <span style={{color:'#086d2fff'}}>Person</span>:
{"\n"}    <span style={{color:'#569CD6'}}>def</span> __init__(self, name):
{"\n"}        self.__name = name
{"\n"}
{"\n"}    <span style={{color:'#086d2fff'}}>@property</span>
{"\n"}    <span style={{color:'#569CD6'}}>def</span> name(self):
{"\n"}        <span style={{color:'#569CD6'}}>return</span> self.__name
{"\n"}
{"\n"}    <span style={{color:'#086d2fff'}}>@name.setter</span>
{"\n"}    <span style={{color:'#569CD6'}}>def</span> name(self, value):
{"\n"}        self.__name = value

{"\n"}
{"\n"}p = <span style={{color:'#086d2fff'}}>Person</span>(<span style={{color:'#D69D85'}}>"Alice"</span>)
{"\n"}<span style={{color:'#569CD6'}}>print</span>(p.name)
{"\n"}p.name = <span style={{color:'#D69D85'}}>"Bob"</span>
{"\n"}<span style={{color:'#569CD6'}}>print</span>(p.name)
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
{`Alice
Bob`}
      </div>

      <hr />
      <h2>Access Modifier</h2>
      <p>Public / Protected / Private</p>
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
<span style={{color:'#7cad5aff'}}># ตัวอย่าง Access Modifier</span>
{"\n"}<span style={{color:'#569CD6'}}>class</span> <span style={{color:'#086d2fff'}}>Example</span>:
{"\n"}    <span style={{color:'#569CD6'}}>def</span> __init__(self):
{"\n"}        self.public = 1
{"\n"}        self._protected = 2
{"\n"}        self.__private = 3
{"\n"}
{"\n"}e = <span style={{color:'#086d2fff'}}>Example</span>()
{"\n"}<span style={{color:'#569CD6'}}>print</span>(e.public)
{"\n"}<span style={{color:'#569CD6'}}>print</span>(e._protected)
{"\n"}<span style={{color:'#569CD6'}}># print(e.__private)  # จะ error</span>
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
{`1
2`}
      </div>

      <hr />
      <h2>Super()</h2>
      <p>เรียก constructor หรือ method ของคลาสแม่</p>
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
<span style={{color:'#7cad5aff'}}># ตัวอย่าง Super()</span>
{"\n"}<span style={{color:'#569CD6'}}>class</span> <span style={{color:'#086d2fff'}}>Animal</span>:
{"\n"}    <span style={{color:'#569CD6'}}>def</span> __init__(self, name):
{"\n"}        self.name = name
{"\n"}
{"\n"}<span style={{color:'#569CD6'}}>class</span> <span style={{color:'#086d2fff'}}>Dog</span>(<span style={{color:'#086d2fff'}}>Animal</span>):
{"\n"}    <span style={{color:'#569CD6'}}>def</span> __init__(self, name, breed):
{"\n"}        <span style={{color:'#569CD6'}}>super</span>().__init__(name)
{"\n"}        self.breed = breed
{"\n"}
{"\n"}d = <span style={{color:'#086d2fff'}}>Dog</span>(<span style={{color:'#D69D85'}}>"Lucky"</span>, <span style={{color:'#D69D85'}}>"Bulldog"</span>)
{"\n"}<span style={{color:'#569CD6'}}>print</span>(d.name, d.breed)
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
{`Lucky Bulldog`}
      </div>

      <hr />
      <h2>Constructor และ Destructor</h2>
      <p><span className="operator-symbol">__init__</span>  / <span className="operator-symbol">__del__</span></p>
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
<span style={{color:'#7cad5aff'}}># ตัวอย่าง Constructor / Destructor</span>
{"\n"}<span style={{color:'#569CD6'}}>class</span> <span style={{color:'#086d2fff'}}>Sample</span>:
{"\n"}    <span style={{color:'#569CD6'}}>def</span> __init__(self):
{"\n"}        <span style={{color:'#569CD6'}}>print</span>(<span style={{color:'#D69D85'}}>"Object ถูกสร้าง"</span>)
{"\n"}    <span style={{color:'#569CD6'}}>def</span> __del__(self):
{"\n"}        <span style={{color:'#569CD6'}}>print</span>(<span style={{color:'#D69D85'}}>"Object ถูกทำลาย"</span>)
{"\n"}
{"\n"}s = <span style={{color:'#086d2fff'}}>Sample</span>()
{"\n"}del s
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
{`Object ถูกสร้าง
Object ถูกทำลาย`}
      </div>

      <hr />
      <h2>กำหนดค่าให้ Attribute / Default Value</h2>
      <p>สามารถกำหนดค่าเริ่มต้นให้ attribute ได้</p>
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
<span style={{color:'#7cad5aff'}}># ตัวอย่าง Default Attribute</span>
{"\n"}<span style={{color:'#569CD6'}}>class</span> <span style={{color:'#086d2fff'}}>Car</span>:
{"\n"}    <span style={{color:'#569CD6'}}>def</span> __init__(self, color=<span style={{color:'#D69D85'}}>"Red"</span>):
{"\n"}        self.color = color
{"\n"}
{"\n"}c1 = <span style={{color:'#086d2fff'}}>Car</span>()
{"\n"}c2 = <span style={{color:'#086d2fff'}}>Car</span>(<span style={{color:'#D69D85'}}>"Blue"</span>)
{"\n"}<span style={{color:'#569CD6'}}>print</span>(c1.color, c2.color)
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
{`Red Blue`}
      </div>

      <hr />
      <h2>การสร้าง Class แยกไฟล์</h2>
      <p>สร้างไฟล์แยกและ import มาใช้งาน</p>
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
<span style={{color:'#7cad5aff'}}># dog.py</span>
{"\n"}<span style={{color:'#569CD6'}}>class</span> <span style={{color:'#086d2fff'}}>Dog</span>:
{"\n"}    <span style={{color:'#569CD6'}}>def</span> bark(self):
{"\n"}        <span style={{color:'#569CD6'}}>print</span>(<span style={{color:'#D69D85'}}>"Woof!"</span>)
 <hr/>
<span style={{color:'#7cad5aff'}}># main.py</span>
{"\n"}<span style={{color:'#569CD6'}}>from</span> dog <span style={{color:'#569CD6'}}>import</span> Dog
{"\n"}d = <span style={{color:'#086d2fff'}}>Dog</span>()
{"\n"}d.bark()
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
{`Woof!`}
      </div>

      <hr />
      <h2>ตารางสรุป OOP Python (ครบทุก concept)</h2>
      <table className="sizetable" style={{
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '16px',
        textAlign: 'left'
      }}>
        <thead>
          <tr style={{ backgroundColor: '#0078d7', color: '#fff' }}>
            <th style={{ padding: '8px', border: '1px solid #ccc' }}>Concept</th>
            <th style={{ padding: '8px', border: '1px solid #ccc' }}>คำอธิบาย</th>
            <th style={{ padding: '8px', border: '1px solid #ccc' }}>ตัวอย่าง</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>Class / Object</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>แม่แบบและ instance ของคลาส</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>d = Dog("Lucky")</td>
          </tr>
          <tr>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>Inheritance</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>สืบทอดคุณสมบัติและเมธอดจากคลาสแม่</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>class Cat(Animal)</td>
          </tr>
          <tr>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>Encapsulation / Access Modifier</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>ซ่อนข้อมูล / ป้องกันการเข้าถึงตัวแปร</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>self.__name, self._protected, self.public</td>
          </tr>
          <tr>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>Polymorphism</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>ฟังก์ชันเดียวกันใช้กับ object หลายชนิด</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>obj.speak()</td>
          </tr>
          <tr>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>__str__/__repr__</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>ปรับการแสดงผลของ Object</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>def __str__(self)</td>
          </tr>
          <tr>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>Operator Overloading</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>ปรับพฤติกรรม operator กับ Object</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>v1 + v2</td>
          </tr>
          <tr>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>Getter / Setter</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>จัดการการเข้าถึง attribute ด้วย @property</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>@property / @name.setter</td>
          </tr>
          <tr>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>Static Method</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>ฟังก์ชันไม่เข้าถึง instance</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>@staticmethod</td>
          </tr>
          <tr>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>Class Method</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>ฟังก์ชันเข้าถึงคลาส ใช้ cls</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>@classmethod</td>
          </tr>
          <tr>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>Super()</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>เรียก constructor / method ของคลาสแม่</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>super().__init__(...)</td>
          </tr>
          <tr>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>Constructor / Destructor</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>__init__ / __del__ สร้างและทำลาย object</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>def __init__(self) / def __del__(self)</td>
          </tr>
          <tr>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>Default Attribute Value</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>กำหนดค่าเริ่มต้นให้ attribute</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>def __init__(self, color="Red")</td>
          </tr>
          <tr>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>Separate File Class</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>สร้าง class ในไฟล์แยกแล้ว import มาใช้งาน</td>
            <td style={{ padding: '8px', border: '1px solid #ccc' }}>from dog import Dog</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
