export function LoginForm() {

    


    return (
        <form onSubmit={handleLogin} id='loginForm'>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Write your username here..."
                    value={username}
                    onChange={({ target }) => setUsername(target.value)}
                />
            </div>
            <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">Password</label>
                <input
                    type='password'
                    className="form-control"
                    id="inputPassword"
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                />
            </div>
            <div>
                <button type='submit'>Login</button>
            </div>
        </form>
    )
}