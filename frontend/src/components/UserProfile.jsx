import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserProfile({ user, onProfileUpdated }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [medicalHistory, setMedicalHistory] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user) {
      setName(user.name || '');
      setAge(user.age || '');
      setGender(user.gender || '');
      setMedicalHistory((user.medicalHistory || []).join(', '));
    }
  }, [user]);

  const updateProfile = async () => {
    if (!name) {
      alert('Please enter your name');
      return;
    }

    setLoading(true);
    try {
      const token = localStorage.getItem('token');
      const response = await axios.put('http://localhost:5000/api/users/profile', {
        name,
        age: parseInt(age) || null,
        gender,
        medicalHistory: medicalHistory.split(',').map(h => h.trim()).filter(h => h)
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });

      onProfileUpdated(response.data.user);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('Error updating profile');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="tab-content active">
      <h2>👤 My Profile</h2>
      
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>

      <div className="form-group">
        <label>Age</label>
        <input
          type="number"
          className="form-control"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter your age"
        />
      </div>

      <div className="form-group">
        <label>Gender</label>
        <select className="form-control" value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="form-group">
        <label>Medical History (comma-separated)</label>
        <textarea
          className="form-control"
          value={medicalHistory}
          onChange={(e) => setMedicalHistory(e.target.value)}
          placeholder="Enter any medical conditions (e.g., Asthma, Diabetes)"
          rows="4"
        />
      </div>

      <button className="btn btn-primary" onClick={updateProfile} disabled={loading}>
        <i className="fas fa-save"></i>
        {loading ? 'Updating...' : 'Update Profile'}
      </button>
    </div>
  );
}

export default UserProfile;