**PLANS:**
1. My Plans:
    **Note:** Show Only Events Made In App. Not blocks User inputs themselves such as "Work"
    **Note:** Filter Button allows you to go forward one week at a time.
    - GET [CurrentDay], [TimeBlock], [DayDate] as list headers/sections.
    - GET [EventTitle]
    - GET [FriendFullName(s)] or [NicheName] the event is with.
    - GET [EventLocation] &/or [EventAddress]
    - GET [StartTime] & [EndTime] if end time exists.
    - PUT Cancel Button to update and cancel event. 
2. My Availability:
    **Note:** Default view is current day + 6 days. Rolling Week.
    **Note:** Filter Button allows you to go forward one week at a time.
    Example) Tuesday March 12th - Tuesday March 19th
    **1st** Select A Day of the Week. [DATE] needed to match Day of Week.
        Example) Tuesday (March 12th).
    **2nd** Lists My TimeSlots in a List Below with Friends who are also available during that time.
    - GET [CurrentDay]
    - GET [FriendProfilePicture]
    - GET [FriendFullName]
    - GET [FriendMatchingAvailableTimes]
    - POST Plan Button to start new plan modal.
    
**EVENTS:**
**Note:** Default view is current day + 6 days. Rolling Week.
    Example) Tuesday March 12th - Tuesday March 19th
**Note:** Filter Button allows you to go forward one week at a time.
**1st** Select A Day of the Week. [DATE] needed to match Day of Week.
        Example) Tuesday (March 12th).
**2nd** [TimeSlot] of User Availability (My Availability), could be multiple time slots.
**3rd** List of Users/Niches that have Events/Plans during My Available Time Slots.
1. Friends:
    - GET [EventTitle]
    - GET [FriendFullName(s)] if multiple friends attending. Displays 2 names then "# of Others"
    - GET [EventLocation] &/or [EventAddress]
    - GET [StartTime] & [EndTime] if end time exists.
    - POST Attend Button which adds Event to My Plans.
2. Niches:
    - GET [NicheName]
    - GET [EventTitle]
    - GET [EventLocation] &/or [EventAddress]
    - GET [StartTime] & [EndTime] if end time exists.
    - POST Attend Button which adds Event to My Plans.
3. Nearby:
    - Display from current location 15 Mile Radius?
    - GET [FriendFullName(s)] &/or [NicheName]
    - GET [EventTitle]
    - GET [EventLocation] &/or [EventAddress]
    - GET [StartTime] & [EndTime] if end time exists.
    - POST Attend Button which adds Event to My Plans.

**FOLLOWING:**
1. Friends:
    - GET [FriendFullName(s)] Alphabetical Order By First Name
    - GET [FriendProfilePicture]
    - POST Plan Button --> Goes to Friends Matching Availability
    - GET ">" Button Goes to Profile (Same functionality as above but displays Friends Plans tab.)
2. Niches
    - GET [NicheName]Alphabetical Order By Niche Name
    - GET [NicheProfilePicture]
    - GET [#Followers]
    - Share Button --> Share Modal
    - GET ">" Button Goes to Niche Page.

**NOTIFICATIONS:**
1. Updates/Alerts:
    **A. Type:** Niche Added An Event.
    - GET [NicheProfilePicture]
    - GET [NicheName]
    - GET [DATE]
    - GET [StartTime] & [EndTime] if end time exists.
    - GET [EventTitle]
    - GET [EventLocation] &/or [EventAddress]
    - GET [Timestamp] of notification.
    - POST Button for Add Event to My Plans.

    **B. Type:** Friend accepted a plan invite.
    - GET [FriendProfilePicture]
    - GET [FriendFullName(s)]
    - GET [EventLocation] &/or [EventAddress]
    - Date/Time
    - GET [EventLocation] &/or [EventAddress]
    - GET [Timestamp] of notification.

    **C. Type:** Friend Cancelled Plans.
    - GET [FriendProfilePicture]
    - GET [FriendFullName(s)]
    - GET [EventTitle]
    - GET [DATE]
    - GET [StartTime] & [EndTime] if end time exists.
    - GET [Reason]
    - GET [Timestamp] of notification.
    **D. Type:** Friend denied a plan invite.
    - GET [FriendProfilePicture]
    - GET [FriendFullName(s)]
    - GET [EventTitle]
    - GET [DATE]
    - GET [StartTime] & [EndTime] if end time exists.
    - GET [Reason]
    - GET [Timestamp] of notification.
    **E. Type:** You and a Friend are now connected.
    - GET [FriendProfilePicture]
    - GET [FriendFullName(s)]
    - GET [Timestamp] of notification.

2. Invites:
    **A.** Type: Friend wants to make plans (with details).
    - Friend Profile Picture
    - GET [FriendFullName(s)]
    - GET [DATE]
    - GET [StartTime] & [EndTime] if end time exists.
    - GET [EventTitle]
    - GET [EventLocation] &/or [EventAddress]
    - GET [Timestamp] of notification/request.
    - POST Button for Accept & Decline.

    **B.** Type: Friend wants to make plans (without details).
    - GET [FriendProfilePicture]
    - GET [FriendFullName(s)]
    - GET [DATE]
    - GET [StartTime] & [EndTime] if end time exists.
    - GET [Timestamp] of notification/request.
    - POST Button for Accept & Decline.

    **C.** Type: New Friend Request to Follow/Connect.
    - GET [FriendProfilePicture]
    - GET [FriendFullName(s)]
    - GET [Timestamp] of request/connect.
    - POST Button for Accept & Decline.

**PROFILES:**
1. GET Profile Picture
2. GET Phone Number
3. GET Email
4. GET Instagram Handle
4. GET Facebook Username
5. GET Twitter Username

**FILTER**
1. This Week:
    - GET [CurrentDay], i++ i < 8
    - GET [CurrentDate], i++, i < 8
2. Next Week:
    - GET [CurrentDay] + 8, 8++ i < 15
    - GET [CurrentDate] + 8, 8++ i < 15

**MODALS**
1. Add To Plans:
    - GET [EventTitle]
    - GET [DATE]
    - GET [StartTime] & [EndTime] if end time exists.
    - GET [FriendFullName(s)] or [NicheName] the event is with.
    - POST Add Button adds to plans.

2. Cancel Plans:
    - GET [EventTitle]
    - GET [DATE]
    - GET [StartTime] & [EndTime] if end time exists.
    - GET [FriendFullName(s)] or [NicheName] the event is with.
    - PUT: Reason
    - PUT Cancel Button removes from plans.

3. Decline Plans:
    - GET [EventTitle]
    - GET [DATE]
    - GET [StartTime] & [EndTime] if end time exists.
    - GET [FriendFullName(s)]
    - PUT/POST: Reason
    - PUT Cancel Button removes from plans.

4. New Plan:
    - POST Input: Event Title
    - POST Input: Details
    - POST Input: Location
    - POST Input Dropdown: Length of Time
        Example) Friend is available for 6 hours. My Plan only needs a length of 2 hours.
    - **Send Plans:**
        - POST Sends Notification to Friend(s).
5. Plan Details:
    - GET [EventTitle]
    - GET [FriendFullName(s)]
    - GET [DATE]
    - GET [StartTime] & [EndTime] if end time exists.
    - GET [EventLocation] &/or [EventAddress]
    - GET [EventDetails]
6. Share:
    - Input: Friends list by typing in name.
    - Not Necessary for MVP