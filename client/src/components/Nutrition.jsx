<div className="nutrition-container">
    <div className="add-nutrition-box">
        <h2>Add Nutrition</h2>
        <form onSubmit={handleFormSubmit} className="nutrition-form">
            {/* Input fields */}
            <button type="submit" className="add-nutrition-button">Add Nutrition</button>
        </form>
        <Link to="/dashboard" className="back-to-dashboard-button">Back to Dashboard</Link>
    </div>
</div>
