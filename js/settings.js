export const settings = `
  <h2>Settings</h2>
  <p>Manage your account, notifications, preferences, and system configurations.</p>

  <!-- General Settings -->
  <section class="settings-section">
    <h3>General Settings</h3>
    <div class="form-group">
      <label>Profile Picture</label>
      <input type="file" />
    </div>
    <div class="form-group">
      <label>Full Name</label>
      <input type="text" placeholder="Enter full name" />
    </div>
    <div class="form-group">
      <label>Email Address</label>
      <input type="email" placeholder="Enter email" />
    </div>
    <div class="form-group">
      <label>Phone Number</label>
      <input type="text" placeholder="Enter phone number" />
    </div>
    <div class="form-group">
      <label>Role</label>
      <select>
        <option>Admin</option>
        <option>Operator</option>
        <option>Viewer</option>
      </select>
    </div>
    <button class="btn-save">Save Changes</button>
  </section>

  <!-- Notifications & Alerts -->
  <section class="settings-section">
    <h3>Notifications & Alerts</h3>
    <div class="toggle-group">
      <label><input type="checkbox" checked /> Critical Alerts</label>
      <label><input type="checkbox" checked /> Warnings</label>
      <label><input type="checkbox" /> Informational</label>
    </div>
    <div class="toggle-group">
      <label><input type="checkbox" checked /> Email Notifications</label>
      <label><input type="checkbox" /> SMS Alerts</label>
      <label><input type="checkbox" checked /> Push Notifications</label>
    </div>
    <div class="form-group">
      <label>Alert Frequency</label>
      <select>
        <option>Instant</option>
        <option>Hourly Digest</option>
        <option>Daily Summary</option>
        <option>Weekly Summary</option>
      </select>
    </div>
  </section>

  <!-- Account & Security -->
  <section class="settings-section">
    <h3>Account & Security</h3>
    <div class="form-group">
      <label>Current Password</label>
      <input type="password" />
    </div>
    <div class="form-group">
      <label>New Password</label>
      <input type="password" />
    </div>
    <div class="form-group">
      <label>Confirm New Password</label>
      <input type="password" />
    </div>
    <button class="btn-save">Change Password</button>
    <div class="toggle-group">
      <label><input type="checkbox" /> Enable Two-Factor Authentication (2FA)</label>
    </div>
    <h4>Active Sessions</h4>
    <table class="settings-table">
      <tr><th>Device</th><th>Browser</th><th>IP</th><th>Last Login</th><th>Action</th></tr>
      <tr><td>Windows PC</td><td>Chrome</td><td>192.168.1.2</td><td>Today</td><td><button>Logout</button></td></tr>
    </table>
  </section>

  <!-- System Preferences -->
  <section class="settings-section">
    <h3>System Preferences</h3>
    <div class="form-group">
      <label>Language</label>
      <select>
        <option>English</option>
        <option>Filipino</option>
        <option>Spanish</option>
      </select>
    </div>
    <div class="form-group">
      <label>Timezone</label>
      <select>
        <option>GMT+8 (Philippines)</option>
        <option>GMT+0 (UTC)</option>
      </select>
    </div>
    <div class="form-group">
      <label>Data Refresh Rate</label>
      <select>
        <option>30 seconds</option>
        <option>1 minute</option>
        <option>5 minutes</option>
        <option>15 minutes</option>
      </select>
    </div>
    <div class="form-group">
      <label>Units</label>
      <select>
        <option>Kilograms / Kilometers</option>
        <option>Pounds / Miles</option>
      </select>
    </div>
  </section>

  <!-- Reports & Data -->
  <section class="settings-section">
    <h3>Reports & Data</h3>
    <div class="form-group">
      <label>Default Report Format</label>
      <select>
        <option>PDF</option>
        <option>CSV</option>
        <option>Excel</option>
      </select>
    </div>
    <div class="form-group">
      <label>Auto-Export Schedule</label>
      <select>
        <option>Daily</option>
        <option>Weekly</option>
        <option>Monthly</option>
      </select>
    </div>
    <div class="form-group">
      <label>Data Retention Policy</label>
      <select>
        <option>6 months</option>
        <option>1 year</option>
        <option>5 years</option>
      </select>
    </div>
  </section>

  <!-- Integrations -->
  <section class="settings-section">
    <h3>Integrations</h3>
    <div class="form-group">
      <label>API Key</label>
      <input type="text" value="************" readonly />
      <button>Regenerate</button>
    </div>
    <div class="form-group">
      <label>Webhooks</label>
      <button>Add New Webhook</button>
    </div>
    <div class="toggle-group">
      <label><input type="checkbox" checked /> Google Maps</label>
      <label><input type="checkbox" /> PowerBI</label>
    </div>
  </section>

  <!-- Team & Permissions -->
  <section class="settings-section">
    <h3>Team & Permissions</h3>
    <table class="settings-table">
      <tr><th>Name</th><th>Role</th><th>Email</th><th>Status</th><th>Action</th></tr>
      <tr><td>Juan Dela Cruz</td><td>Operator</td><td>juan@email.com</td><td>Active</td><td><button>Edit</button></td></tr>
    </table>
    <button>Add New User</button>
  </section>

  <!-- Support -->
  <section class="settings-section">
    <h3>Support</h3>
    <p>Need help? Visit our <a href="#">Help Center</a> or <a href="#">Contact Support</a>.</p>
    <p><small>System Version: 1.0.0 | Last Update: Sept 2025</small></p>
  </section>

  <!-- Danger Zone -->
  <section class="settings-section danger-zone">
    <h3>Danger Zone</h3>
    <button class="btn-danger">Deactivate Account</button>
    <button class="btn-danger">Delete Account</button>
    <button class="btn-warning">Reset All Settings</button>
  </section>
`;
