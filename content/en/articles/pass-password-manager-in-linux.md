---
title: "Manage password with pass command in Linux"
date: "2021-07-05"
description: "Easily manage all you passwords and credentials with the simplest password manager"
tags: ["pass", "Linux", "password manager", "security"]
image: "/articles/linux-password-manager.avif"
readingTime: "2"
---

![preview](/articles/linux-password-manager.avif)

With rising cases for the data breaches, the importance of choosing strong password has increased. However, it could be very tiresome to come up with new, equally strong passwords for different credentials. Also, it would be equally painful, for having to manage all those password. There is no doubt about it being one of the main reasons for reusing of the same password in multiple places, by majority of users.

## Password Managers

But, do we really need to manage our password manually? Aren't there password managers which takes care of all hardships mentioned above? And the answer is yes, and there are lots of them. But then again, why aren't everyone using them? Well frankly speaking, then answer could vary for different segments of people. Talking about me, I hesitated to use password managers (mostly online) because:
* passwords were stored in 3rd party server
* passwords could have been compromised if servers were breached

## Where does pass fit in?

Pass is the simple password manager, following the UNIX philosophy. In between the hundreds of password managers, pass stands-out among the developer community due to its simplicity. It is basically a command line utility for password management.

It uses GPG key to encrypt the passwords and stores in the user's machine itself, instead of some servers in clouds that we don't know about. But then, how can we sync the passwords among various devices? Well, it allows to easily track password changes, keep backup and sync them between multiple devices (even in smartphones) using git.

## How to use it?

Before setting up the pass, we need to make sure we have our GPG key. In most of the linux distributions, we can setup GPG key by command:

~~~bash
gpg —full-gen-key
~~~

Once we have GPG key to encrypt the password, we can initialize the password store.

~~~bash
pass init yourid@something.com
~~~

It initializes the password store in default location i.e. ~/.password-store. After that we can start inserting and generating our credentials.

~~~bash
pass insert login_url/username
~~~

It will ask for the password you want to insert. Then it will create directory named login_url inside which username.gpg file resides holding the encrypted credentials.

We can also generate passwords of desired length by following command:

~~~bash
pass generate login_url/username <length>
~~~

To view the inserted or generated passwords, we use command:

~~~bash
pass login_url/username
~~~

It would directly show the password in the console itself. If that is not something you want then use \`-c\` flag. It will copy the password in clipboard. However, it will be erased from there after 45 sec., for the security purposes.

As pass uses UNIX shell commands, managing of passwords is also very easy. We can use commands like \`rm\`, \`mv\`, \`cp\`, etc. to remove, move and copy our password files.

Now for backing up the passwords, we can directly push it to our private repository.

~~~bash
pass git remote add origin git@url
pass git push -u origin main
~~~

Pass is not just limited to terminal. Community has come up with list of impressive GUI clients for other platforms as well. Few of the pass clients that I use in daily basis are:

* [passmenu](https://github.com/cdown/passmenu): a dmenu script
* [passff](https://github.com/passff/passff): a Firefox extension
* [Android-Password-Store](https://github.com/android-password-store/Android-Password-Store): an android app

You can checkout out various [commands](https://git.zx2c4.com/password-store/about/) that we can use with pass from the official site.
