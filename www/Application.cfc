<cfcomponent output="false" extends="k1technology.baseApplication">
	<!---Remember to modify the robots.txt file when setting up this file--->
	<cfset this.name = "base3new.vin655.com">
	<cfset this.sessionManagement = true>
	<cfset this.sessionTimeout = createTimeSpan(0,0,20,0)>
	<cfset this.customTagPaths = expandpath('../../../../platform/_base3/customtags')>
	
	<cffunction name="onApplicationStart" returnType="boolean" output="false">
		<cfset application.self="/index.cfm">
		<cfset application.websiteID="777520EF-05E0-D028-FEC5-3216F2F84367">
		<cfset super.onApplicationStart()>
		<cfset application.isBase3 = 1>

		<cfreturn true>
	</cffunction>

	<cffunction name="onApplicationEnd" returnType="void" output="false">
		<cfargument name="applicationScope" required="true">
	</cffunction>
	
	<cffunction name="onRequestStart" returnType="boolean" output="true">
		<cfargument name="thePage" type="string" required="true">

		<cfset request.cfpath="vin65">
		<cfset super.onRequestStart(thePage=arguments.thePage)>

		<cfreturn true>
	</cffunction>
	

	<cffunction name="onRequest" returnType="void">
		<cfargument name="thePage" type="string" required="true">

		<cfset super.onRequest(thePage=arguments.thePage)>
		
	</cffunction>

	
	<cffunction name="onRequestEnd" returnType="void" output="false">
		<cfargument name="thePage" type="string" required="true">
	</cffunction>
	
	<cffunction name="onError" returnType="void" output="true">
		<cfargument name="exception" required="true">
		<cfargument name="eventname" type="string" required="true">

		<cfset super.onError(exception=arguments.exception,eventName=arguments.eventName)>
	</cffunction>
	
	<cffunction name="onSessionStart" returnType="void" output="false">

		<cfset super.onSessionStart()>
	</cffunction>
	
	<cffunction name="onSessionEnd" returnType="void" output="false">
		<cfargument name="sessionScope" type="struct" required="true">
		<cfargument name="appScope" type="struct" required="false">
	</cffunction>
	
</cfcomponent>