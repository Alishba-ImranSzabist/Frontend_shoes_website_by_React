


export default function Login() {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: "#f2f2f2",
        }}
      >
        <div
          style={{
            backgroundColor: "#fff",
            padding: "30px",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
            width: "300px",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
          <form>
            <div style={{ marginBottom: "15px" }}>
              <label
                style={{ display: "block", marginBottom: "5px" }}
                htmlFor="username"
              >
                Username
              </label>
              <input
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
                type="text"
                id="username"
                name="username"
                required
              />
            </div>
            <div style={{ marginBottom: "15px" }}>
              <label
                style={{ display: "block", marginBottom: "5px" }}
                htmlFor="password"
              >
                Password
              </label>
              <input
                style={{
                  width: "100%",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
                type="password"
                id="password"
                name="password"
                required
              />
            </div>
            <button
              style={{
                width: "100%",
                padding: "10px",
                backgroundColor: "#0288d1",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              type="submit"
            >
              Login
            </button>
          </form>
          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <a href="#">Forgot Password?</a>
            
           
          </div>
        </div>
      </div>
    </div>
  );
}
