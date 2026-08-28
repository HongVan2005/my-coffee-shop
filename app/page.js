export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#fdfbf7", color: "#333", margin: 0, padding: 0 }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 50px", backgroundColor: "#2c221e", color: "#fff" }}>
        <h1 style={{ margin: 0, fontSize: "24px", color: "#d4a373" }}>☕ Highland & Bean</h1>
      </header>
      <section style={{ textAlign: "center", padding: "80px 20px", backgroundColor: "#faedcd" }}>
        <h2 style={{ fontSize: "40px", color: "#6f4e37", marginBottom: "20px" }}>Hương Vị Cà Phê Đích Thực Mỗi Ngày</h2>
        <p style={{ fontSize: "18px", color: "#555", maxWidth: "600px", margin: "0 auto 30px auto" }}>
          Khám phá những hạt cà phê thượng hạng được rang xay thủ công, mang lại năng lượng tuyệt vời cho ngày mới của bạn.
        </p>
      </section>
      <section style={{ padding: "60px 50px", maxWidth: "1200px", margin: "0 auto" }}>
        <h3 style={{ textAlign: "center", fontSize: "30px", color: "#2c221e", marginBottom: "40px" }}>Menu Nổi Bật</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "30px" }}>
          <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
            <h4 style={{ color: "#6f4e37", marginTop: 0 }}>Cà Phê Sữa Đá</h4>
            <span style={{ fontWeight: "bold", color: "#bc6c25" }}>29.000 đ</span>
          </div>
          <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
            <h4 style={{ color: "#6f4e37", marginTop: 0 }}>Cappuccino Ý</h4>
            <span style={{ fontWeight: "bold", color: "#bc6c25" }}>45.000 đ</span>
          </div>
        </div>
      </section>
    </main>
  );
}
