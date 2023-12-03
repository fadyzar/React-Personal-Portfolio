import React from 'react'

export default function ContactUs() {
    const labelStyle = {
        color : 'beige',
    }
  return (
    <div class="shade">
		<div class="blackboard">
				<div class="form" >



						<p>
								<label style={labelStyle}>Name: </label>
								<input type="text" />
						</p>
						<p>
								<label style={labelStyle}>Email: </label>
								<input type="text" />
						</p>
						<p>
								<label style={labelStyle}>Phone: </label>
								<input type="tel" />
						</p>
						<p>
								<label style={labelStyle}>Subject: </label>
								<input type="text" />
						</p>
						<p>
								<label style={labelStyle}>Message: </label>
								<textarea></textarea>
						</p>
						<p class="wipeout">
								<input type="submit" value="Send" />
						</p>

				</div>
		</div>
</div>

  )
}
