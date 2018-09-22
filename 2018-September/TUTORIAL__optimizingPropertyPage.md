#

	- Select Load asynchronously when configuring property pages that contain combo or list fields that perform a DQL query

	- Use the $value(filter) wildcard to enable filtering. If you do not use the wildcard, the query returns all values when an end user selects a list box.

	- If you load asynchronously, a DQL query for loading values must include as name, as label, and $value(filter)

	- For example, select user_name as name, user_name as label from dm_user where $value(filter) order by 1