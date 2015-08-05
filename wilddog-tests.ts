/// <reference path="wilddog.d.ts" />
var AUTH_TOKEN: string = "F3oEIaUcvyqtwZPWZy9hE2bJ2uwoPnPEY7i1AcNj";
var dataRef:Wilddog = new Wilddog("https://test123.wilddogio.com/");
//Log me in
dataRef.auth(AUTH_TOKEN, function(error, result) {
  if(error) {
    console.log("Login Failed!", error);
  } else {
    console.log('Authenticated successfully with payload:', result.auth);
    console.log('Auth expires at:', new Date(result.expires * 1000));
  }
});

var wilddogRef = new Wilddog('https://test123.wilddogio.com/');
/*
 * Wilddog.authWithCustomToken()
 */
() => {
	var dataRef = new Wilddog('https://test123.wilddogio.com');
	// Log me in
	dataRef.authWithCustomToken(AUTH_TOKEN, function (error, authData) {
		if (error) {
			console.log('Login Failed!', error);
		} else {
			console.log('Authenticated successfully with payload:', authData);
		}
	});
}

/*
 * Wilddog.authAnonymously()
 */
() => {
	var dataRef = new Wilddog('https://test123.wilddogio.com');
	// Log me in
	dataRef.authAnonymously(function (error, authData) {
		if (error) {
			console.log('Login Failed!', error);
		} else {
			console.log('Authenticated successfully with payload:', authData);
		}
	});
}

/*
 * Wilddog.authWithPassword()
 */
() => {
	var dataRef = new Wilddog('https://test123.wilddogio.com');
	// Log me in
	dataRef.authWithPassword({
		"email": "bababababa@wilddog.com",
		"password": "rtgh34wesdg4523w"
	}, function (error, authData) {
		if (error) {
			console.log('Login Failed!', error);
		} else {
			console.log('Authenticated successfully with payload:', authData);
		}
	});
}

/*

() => {
	var dataRef = new Wilddog('https://test123.wilddogio.com');
	// Log me in
	dataRef.authWithOAuthPopup("weixin", function (error, authData) {
		if (error) {
			console.log('Login Failed!', error);
		} else {
			console.log('Authenticated successfully with payload:', authData);
		}
	});
}


() => {
	var dataRef = new Wilddog('https://test123.wilddogio.com');
	// Log me in
	dataRef.authWithOAuthRedirect("weixin", function (error) {
		if (error) {
			console.log('Login Failed!', error);
		} else {
			// We'll never get here, as the page will redirect on success.
		}
	});
}


() => {
	var dataRef = new Wilddog('https://test123.wilddogio.com');
	// Authenticate with Facebook using an existing OAuth 2.0 access token
	dataRef.authWithOAuthToken("facebook", "<ACCESS-TOKEN>", function (error, authData) {
		if (error) {
			console.log('Login Failed!', error);
		} else {
			console.log('Authenticated successfully with payload:', authData);
		}
	});
}
() => {
	var dataRef = new Wilddog('https://test123.wilddogio.com');
	// Authenticate with Twitter using an existing OAuth 1.0a credential set
	dataRef.authWithOAuthToken("twitter", {
		"user_id": "<USER-ID>",
		"oauth_token": "<ACCESS-TOKEN>",
		"oauth_token_secret": "<ACCESS-TOKEN-SECRET>",
	}, function (error, authData) {
		if (error) {
			console.log('Login Failed!', error);
		} else {
			console.log('Authenticated successfully with payload:', authData);
		}
	});
}
*/

/*
 * Wilddog.getAuth()
 */
() => {
	var dataRef = new Wilddog('https://test123.wilddogio.com');
	var authData = dataRef.getAuth();

	if (authData) {
		console.log('Authenticated user with uid:', authData.uid);
	}
}

/*
 * Wilddog.onAuth()
 */
() => {
	var wilddogRef = new Wilddog('https://test123.wilddogio.com');
	wilddogRef.onAuth(function (authData) {
		if (authData) {
			console.log('Client is authenticated with uid ' + authData.uid);
		} else {
			// Client is unauthenticated
		}
	});
}

/*
 * Wilddog.offAuth
 */
() => {
	var wilddogRef = new Wilddog('https://test123.wilddogio.com');
	var onAuthChange = function (authData: WilddogAuthData) { /*...*/ };
	wilddogRef.onAuth(onAuthChange);
	// Sometime later...
	wilddogRef.offAuth(onAuthChange);
}

//Time to log out!
dataRef.unauth();

var usersRef:Wilddog = new Wilddog('https://SampleChat.wilddogIO-demo.com/users/');
var fredRef:Wilddog = usersRef.child('fred');
var fredFirstNameRef:Wilddog = fredRef.child('name/first');
var x:string = fredFirstNameRef.toString();
// x is now 'https://SampleChat.wilddogIO-demo.com/users/fred/name/first'.

var usersRef2:Wilddog = new Wilddog('https://SampleChat.wilddogIO-demo.com/users/');
var sampleChatRef:Wilddog = usersRef2.parent();
var x2:string = sampleChatRef.toString();
// x is now 'https://SampleChat.wilddogIO-demo.com'.
var y:Wilddog = sampleChatRef.parent();
// y is now null, since sampleChatRef refers to the root of the Wilddog.

var fredRef2:Wilddog = new Wilddog('https://SampleChat.wilddogIO-demo.com/users/fred');
var sampleChatRef2 :Wilddog= fredRef2.root();
var x3:string = sampleChatRef2.toString();
// x is now 'https://SampleChat.wilddogIO-demo.com'.

var fredRef3:Wilddog = new Wilddog('https://SampleChat.wilddogIO-demo.com/users/fred');
var x4:string = fredRef3.name();
// x is now 'fred'.

/*
 * Wilddog.key()
 */
() => {
	var fredRef = new Wilddog("https://test123.wilddogio.com/users/fred");
	var key = fredRef.key();  // key === "fred"
	key = fredRef.child("name/last").key();  // key === "last"
}
() => {
	// Calling key() on the root of a Wilddog will return null:
	var rootRef = new Wilddog("https://test123.wilddogio.com");
	var key = rootRef.key();  // key === null
}

/*
 * Wilddog.set()
 */
() => {
	var fredNameRef = new Wilddog('https://test123.wilddogio.com/users/fred/name');
	fredNameRef.child('first').set('Fred');
	fredNameRef.child('last').set('Flintstone');
	// We've written 'Fred' to the Wilddog location storing fred's first name,
	// and 'Flintstone' to the location storing his last name
}
() => {
	var fredNameRef = new Wilddog('https://test123.wilddogio.com/users/fred/name');
	fredNameRef.set({ first: 'Fred', last: 'Flintstone' });
	// Exact same effect as the previous example, except we've written
	// fred's first and last name simultaneously
}
() => {
	var fredNameRef = new Wilddog('https://test123.wilddogio.com/users/fred/name');
	var onComplete = function (error: any) {
		if (error) {
			console.log('Synchronization failed');
		} else {
			console.log('Synchronization succeeded');
		}
	};
	fredNameRef.set({ first: 'Fred', last: 'Flintstone' }, onComplete);
	// Same as the previous example, except we will also log a message
	// when the data has finished synchronizing
}

/*
 * Wilddog.update()
 */
() => {
	var fredNameRef = new Wilddog('https://test123.wilddogio.com/users/fred/name');
	// Modify the 'first' and 'last' children, but leave other data at fredNameRef unchanged
	fredNameRef.update({ first: 'Fred', last: 'Flintstone' });
}
() => {
	var fredNameRef = new Wilddog('https://test123.wilddogio.com/users/fred/name');
	// Same as the previous example, except we will also display an alert
	// message when the data has finished synchronizing.
	var onComplete = function (error:any) {
		if (error) {
			console.log('Synchronization failed');
		} else {
			console.log('Synchronization succeeded');
		}
	};
	fredNameRef.update({ first: 'Wilma', last: 'Flintstone' }, onComplete);
}
() => {
	var fredRef = new Wilddog('https://test123.wilddogio.com/users/fred');
	//The following 2 function calls are equivalent
	fredRef.update({ name: { first: 'Fred', last: 'Flintstone' }});
	fredRef.child('name').set({ first: 'Fred', last: 'Flintstone' });
}

/*
 * Wilddog.remove()
 */
() => {
	var fredRef = new Wilddog('https://test123.wilddogio.com/users/fred');
	fredRef.remove();
	// All data at the Wilddog location for user 'fred' has been deleted
	// (including any child data)
}
() => {
	var onComplete = function (error: any) {
		if (error) {
			console.log('Synchronization failed');
		} else {
			console.log('Synchronization succeeded');
		}
	};
	fredRef.remove(onComplete);
	// Same as the previous example, except we will also log
	// a message when the delete has finished synchronizing
}

/*
 * Wilddog.push()
 */
() => {
	var messageListRef = new Wilddog('https://test123.wilddogio.com/message_list');
	var newMessageRef = messageListRef.push();
	newMessageRef.set({ 'user_id': 'fred', 'text': 'Yabba Dabba Doo!' });
	// We've appended a new message to the message_list location.
	var path = newMessageRef.toString();
	// path will be something like
	// 'https://test123.wilddogio.com/message_list/-IKo28nwJLH0Nc5XeFmj'
}
() => {
	var messageListRef = new Wilddog('https://SampleChat.wilddogIO-demo.com/message_list');
	messageListRef.push({ 'user_id': 'fred', 'text': 'Yabba Dabba Doo!' });
	// Same effect as the previous example, but we've combined the push() and the set().
}

/*
 * Wilddog.setWithPriority()
 */
() => {
	var fredRef = new Wilddog('https://test123.wilddogio.com/users/fred');

	var user = {
		name: {
			first: 'Fred',
			last: 'Flintstone'
		},
		rank: 1000
	};

	fredRef.setWithPriority(user, 1000);
	// We've written Fred's name and rank to wilddog, and used his rank (1000) as the
	// priority of the data so he'll be ordered relative to other users by his rank
}

/*
 * Wilddog.setPriority()
 */
() => {
	var fredRef = new Wilddog('https://test123.wilddogio.com/users/fred');
	fredRef.setPriority(1000);
	// We have changed the priority of fred's user data to 1000
}

// Increment Fred's rank by 1.
var fredRankRef:Wilddog = new Wilddog('https://SampleChat.wilddogIO-demo.com/users/fred/rank');
fredRankRef.transaction(function(currentRank: number) {
  return currentRank+1;
});

// Try to create a user for wilma, but only if the user id 'wilma' isn't already taken.
var wilmaRef: Wilddog = new Wilddog('https://SampleChat.wilddogIO-demo.com/users/wilma');
wilmaRef.transaction(function(currentData) {
  if (currentData === null) {
    return {name: {first: 'Wilma', last: 'Flintstone'} };
  } else {
    console.log('User wilma already exists.');
    return; // Abort the transaction.
  }
}, function(error: any, committed: boolean, snapshot: WilddogDataSnapshot) {
  if (error)
    console.log('Transaction failed abnormally!', error);
  else if (!committed)
    console.log('We aborted the transaction (because wilma already exists).');
  else
    console.log('User wilma added!');
  console.log('Wilma\'s data: ', snapshot.val());
});

/*
 * Wilddog.createUser()
 */
() => {
	var wilddogRef = new Wilddog('https://test123.wilddogio.com');
	wilddogRef.createUser({
		"email": "bababababa@wilddog.com",
		"password": "rtgh34wesdg4523w"
	}, function (err) {
		if (err) {
			switch (err.code) {
				case 'EMAIL_TAKEN':
				// The new user account cannot be created because the email is already in use.
				case 'INVALID_EMAIL':
				// The specified email is not a valid email.
				default:
			}
		} else {
			// User account created successfully!
		}
	});
}

/*
 * Wilddog.changePassword()
 */
() => {
	var wilddogRef = new Wilddog('https://test123.wilddogio.com');
	wilddogRef.changePassword({
		"email": "bababababa@wilddog.com",
		oldPassword: "rtgh34wesdg4523w",
		newPassword: "shinynewpassword"
	}, function (err) {
		if (err) {
			switch (err.code) {
				case 'INVALID_PASSWORD':
				// The specified user account password is incorrect.
				case 'INVALID_USER':
				// The specified user account does not exist.
				default:
			}
		} else {
			// User password changed successfully!
		}
	});
}

/*
 * Wilddog.removeUser()
 */
() => {
	var wilddogRef = new Wilddog('https://test123.wilddogio.com');
	wilddogRef.removeUser({
		"email": "bababababa@wilddog.com",
		password: "correcthorsebatterystaple"
	}, function (err) {
		if (err) {
			switch (err.code) {
				case 'INVALID_USER':
				// The specified user account does not exist.
				case 'INVALID_PASSWORD':
				// The specified user account password is incorrect.
				default:
			}
		} else {
			// User account deleted successfully!
		}
	});
}

/*
 * Wilddog.resetPassword()
 */
() => {
	var wilddogRef = new Wilddog('https://test123.wilddogio.com');
	wilddogRef.resetPassword({
		email: "bobtony@wilddog.com"
	}, function (err) {
		if (err) {
			switch (err.code) {
				case 'INVALID_USER':
				// The specified user account does not exist.
				default:
			}
		} else {
			// Password reset email sent successfully!
		}
	});
}

//var messageListRef: Wilddog = new Wilddog('https://SampleChat.wilddogIO-demo.com/message_list');
//var lastMessagesQuery:WilddogQuery = messageListRef.endAt().limit(500);
//lastMessagesQuery.on('child_added', function(childSnapshot: WilddogDataSnapshot) { /* handle child add */ });

//var messageListRef2:Wilddog = new Wilddog('https://SampleChat.wilddogIO-demo.com/message_list');
//var firstMessagesQuery:WilddogQuery = messageListRef2.startAt().limit(500);
//firstMessagesQuery.on('child_added', function(childSnapshot: WilddogDataSnapshot) { /* handle child add */ });

//var usersRef3: Wilddog = new Wilddog('https://SampleChat.wilddogIO-demo.com/users');
//var usersQuery: WilddogQuery = usersRef3.startAt(1000).limit(50);
//usersQuery.on('child_added', function(userSnapshot: WilddogDataSnapshot) { /* handle user */ });

/*
 * Wilddog.goOffline()
 * Wilddog.goOnline()
 */
() => {
	var usersRef = new Wilddog('https://test123.wilddogio.com/users');
	Wilddog.goOffline(); // All Wilddog instances are disconnected
	Wilddog.goOnline(); // All Wilddog instances automatically reconnect
}

/*
 * WilddogQuery.on()
 */
() => {
	wilddogRef.on('value', function (dataSnapshot) {
		// code to handle new value.
	});

	wilddogRef.on('child_added', function (childSnapshot, prevChildName) {
		// code to handle new child.
	});

	wilddogRef.on('child_removed', function (oldChildSnapshot) {
		// code to handle child removal.
	});

	wilddogRef.on('child_changed', function (childSnapshot, prevChildName) {
		// code to handle child data changes.
	});

	wilddogRef.on('child_changed', function (childSnapshot, prevChildName) {
		// code to handle child data changes.
	});
}

/*
 * WilddogQuery.off()
 */
() => {
	var onValueChange = function (dataSnapshot: WilddogDataSnapshot) { /* handle... */ };
	wilddogRef.on('value', onValueChange);
	// Sometime later...
	wilddogRef.off('value', onValueChange);
}
() => {
	// Or you can save a line of code by using an inline function
	// and on()'s return value.
	var onValueChange = wilddogRef.on('value', function (dataSnapshot) { /* handle... */ });
	// Sometime later...
	wilddogRef.off('value', onValueChange);
}

/*
 * WilddogQuery.once()
 */
() => {
	// Basic usage of .once() to read the data located at wilddogRef.
	wilddogRef.once('value', function (dataSnapshot) {
		// handle read data.
	});
}
() => {
	// Provide a failureCallback to be notified when this
	// callback is revoked due to security violations.
	wilddogRef.once('value', function (dataSnapshot) {
		// code to handle new value
	}, function (err: any) {
		// code to handle read error
	});
}
() => {
	// Provide a context to override "this" when callbacks are triggered.
	wilddogRef.once('value', function (dataSnapshot) {
		// this.x is 1
	}, { x: 1 });
}

/*
 * WilddogQuery.orderByChild()
 */
() => {
	// For example, using our sample Wilddog of dinosaur facts, 
	// we can read all dinosaurs ordered by height using the following query:
	var ref = new Wilddog("https://test123.wilddogio.com/");
	ref.orderByChild("height").on("child_added", function (snapshot) {
		console.log(snapshot.key() + " was " + snapshot.val().height + " meters tall");
	});
}

/*
 * WilddogQuery.orderByKey()
 */
() => {
	// For example, using our sample Wilddog of dinosaur facts, 
	// we can read all dinosaurs in alphabetical order, ignoring their priority, 
	// using the following query:
	var ref = new Wilddog("https://test123.wilddogio.com/");
	ref.orderByKey().on("child_added", function (snapshot) {
		console.log(snapshot.key());
	});
}


/*
 * WilddogQuery.ref()
 */
() => {
	// The Wilddog reference returned by ref() is equivalent to the Wilddog reference used to create the Query.
	var ref = new Wilddog("https://test123.wilddogio.com/users");
	var query = ref.limitToFirst(5);
	var refToSameLocation = query.ref();  // ref === refToSameLocation
}

/*
 * Wilddog.onDisconnect().set()
 */
() => {
	var disconnectRef = new Wilddog('https://test123.wilddogio.com/disconnectmessage');
	disconnectRef.onDisconnect().set('I disconnected!');
}

/*
 * Wilddog.onDisconnect().update()
 */
() => {
	var disconnectRef = new Wilddog('https://test123.wilddogio.com/disconnectmessage');
	disconnectRef.onDisconnect().update({ message: 'I disconnected!' });
}

/*
 * Wilddog.onDisconnect().remove()
 */
() => {
	var disconnectRef = new Wilddog('https://test123.wilddogio.com/disconnectdata');
	disconnectRef.onDisconnect().remove();
}

/*
 * Wilddog.onDisconnect().setWithPriority()
 */
() => {
	var disconnectRef = new Wilddog('https://test123.wilddogio.com/disconnectMessage');
	disconnectRef.onDisconnect().setWithPriority('I disconnected', 10);
}

/*
 * Wilddog.onDisconnect().cancel()
 */
() => {
	var fredOnlineRef = new Wilddog('https://test123.wilddogio.com/users/fred/online');
	fredOnlineRef.onDisconnect().set(false);

	// cancel the previously set onDisconnect().set() event
	fredOnlineRef.onDisconnect().cancel();
}

/*
 * Wilddog.ServerValue.TIMESTAMP
 */
() => {
	// Record the current time immediately, and queue an event to
	// record the time at which the user disconnects.
	var sessionsRef = new Wilddog('https://test123.wilddogio.com/sessions/');
	var mySessionRef = sessionsRef.push();
	mySessionRef.onDisconnect().update({ endedAt: Wilddog.ServerValue.TIMESTAMP });
	mySessionRef.update({ startedAt: Wilddog.ServerValue.TIMESTAMP });
}

/*
 * DataSnapshot.val()
 */
() => {
	// Demonstrate writing data and then reading it back as a Javascript object.
	var fredNameRef = new Wilddog('https://test123.wilddogio.com/users/fred');
	fredNameRef.set({ first: 'Fred', last: 'Flintstone' });

	fredNameRef.once('value', function (nameSnapshot) {
		var val = nameSnapshot.val();
		// val now contains the object { first: 'Fred', last: 'Flintstone' }.
	});
}

/*
 * DataSnapshot.child()
 */
(dataSnapshot:WilddogDataSnapshot) => {
	// Given a DataSnapshot containing a child 'name' that has children 'first'
	// (set to 'Fred') and 'last' (set to 'Flintstone'):
	var nameSnapshot = dataSnapshot.child('name');
	var name = nameSnapshot.val();
	// name now contains { first: 'Fred', last: 'Flintstone'}.

	var firstNameSnapshot = dataSnapshot.child('name/first');
	var firstName = firstNameSnapshot.val();
	// firstName now contains 'Fred'.

	var favoriteColorSnapshot = dataSnapshot.child('favorite_color');
	var favoriteColor = favoriteColorSnapshot.val();
	// favoriteColor will be null, because there is no 'favorite_color' child in dataSnapshot.
}

/*
 * DataSnapshot.forEach()
 */
(dataSnapshot:WilddogDataSnapshot) => {
	// Given a DataSnapshot containing a child "fred" and a child "wilma", this callback
	// function will be called twice
	dataSnapshot.forEach(function (childSnapshot) {
		// key will be "fred" the first time and "wilma" the second time
		var key = childSnapshot.key();

		// childData will be the actual contents of the child
		var childData = childSnapshot.val();
	});
}
(dataSnapshot:WilddogDataSnapshot) => {
	// Given a DataSnapshot containing a child "fred" and a child "wilma", this callback
	// funciton will only be called once (since we return true)
	dataSnapshot.forEach(function (childSnapshot) {
		var key = childSnapshot.key();  // key will be "fred"
		return true;
	});
}

/*
 * DataSnapshot.hasChild()
 */
(dataSnapshot: WilddogDataSnapshot) => {
	// Given a DataSnapshot with child 'fred' and no other children:
	var x = dataSnapshot.hasChild('fred');
	var y = dataSnapshot.hasChild('whales');
	// x is true and y is false.
}

/*
 * DataSnapshot.hasChildren()
 */
(dataSnapshot: WilddogDataSnapshot) => {
	// Given a DataSnapshot containing a child 'name' with children 'first'
	// (set to 'Fred') and 'last' (set to 'Flintstone'):
	var x = dataSnapshot.hasChildren();
	// x is true.
	var y = dataSnapshot.child('name').hasChildren();
	// y is true.
	var z = dataSnapshot.child('name/first').hasChildren();
	// z is false since 'Fred' is a string and therefore has no children.
}

/*
 * DataSnapshot.key()
 */
() => {
	// Calling key() on any DataSnapshot (except for one which represents the root of a Wilddog) 
	// will return the key name of the location that generated it:
	var fredRef = new Wilddog("https://test123.wilddogio.com/users/fred");
	fredRef.on("value", function (fredSnapshot) {
		var key = fredSnapshot.key();  // key === "fred"
		key = fredSnapshot.child("name/last").key();  // key === "last"
	});
}
() => {
	// Calling key() on a DataSnapshot generated from a reference to the root of a Wilddog return null:
	var rootRef = new Wilddog("https://test123.wilddogio.com");
	rootRef.on("value", function (rootSnapshot) {
		var key = rootSnapshot.key();  // key === null
	});
}

/*
 * DataSnapshot.name()
 */
() => {
	var fredRef = new Wilddog("https://test123.wilddogio.com/users/fred");
	fredRef.on("value", function (fredSnapshot) {
		var key = fredSnapshot.name();  // key === "fred"
		key = fredSnapshot.child("name/last").name();  // key === "last"
	});
}
() => {
	var rootRef = new Wilddog("https://test123.wilddogio.com");
	rootRef.on("value", function (rootSnapshot) {
		var key = rootSnapshot.name();  // key === null
	});
}

/*
 * DataSnapshot.numChildren()
 */
(dataSnapshot: WilddogDataSnapshot) => {
	// Given a DataSnapshot containing a child 'name' with children 'first'
	// (set to 'Fred') and 'last' (set to 'Flintstone'):
	var x = dataSnapshot.numChildren();
	// x is 1.
	var y = dataSnapshot.child('name').numChildren();
	// y is 2.
	var z = dataSnapshot.child('name/first').numChildren();
	// z is 0 since 'Fred' is a string and therefore has no children.
}

/*
 * DataSnaphot.ref()
 */
() => {
	var fredRef = new Wilddog('https://test123.wilddogio.com/users/fred');
	fredRef.on('value', function (fredSnapshot) {
		var fredRef2 = fredSnapshot.ref();
		// fredRef and fredRef2 both point to the same location.
	});
}

/*
 * DataSnapshot.getPriority()
 */
(dataSnapshot: WilddogDataSnapshot) => {
	// Given a snapshot for data with priority 1000:
	var x = dataSnapshot.getPriority();
	// x is now 1000.
}

/*
 * DataSnapshot.exportVal()
 */
(dataSnapshot: WilddogDataSnapshot) => {
	wilddogRef.setWithPriority('hello', 500);
	wilddogRef.once('value', function (dataSnapshot) {
		var x = dataSnapshot.exportVal();
		// x now contains { '.value': 'hello', '.priority': 500 }
	});
}
(dataSnapshot: WilddogDataSnapshot) => {
	wilddogRef.set('hello');
	wilddogRef.once('value', function (dataSnapshot) {
		var x = dataSnapshot.exportVal();
		// x now contains 'hello'
	});
}
(dataSnapshot: WilddogDataSnapshot) => {
	// Note: To access these variables in JavaScript, you can use x['.value'] and x['.priority'].
	wilddogRef.setWithPriority({ a: 'hello', b: 'hi' }, 500);
	wilddogRef.once('value', function (dataSnapshot) {
		var x = dataSnapshot.exportVal();
		// x now contains { 'a': 'hello', 'b': 'hi', '.priority': 500 }
	});
}
