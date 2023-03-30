Title: How to choose a good CPU?
Date: 03/30/23 09:09
Tags: cpu, intel, amd, knowledge
Authors: Do Anh Tu


Tired of not understanding all of the jargon in CPUs name, in this post I will write down what I've researched.

<img src="{static}/static/images/god_cpus.png" />

There are 2 major players in this field (consumer view): Intel and AMD


## Intel

### Basic

So you’ll notice after the i5 it might have some thing like 9600 or 12600, for the i7 you’d see 12700 or 9700. 
The number before the hundredths digit is the generation. 
So a current gen (12th) i5 would be better than a much older i7 8700 (8th gen) for example. 
There’s a 4 generation difference in technology and everything else that goes into them


### What’s the deal with 11th gen Intel? Are you saying it wasn’t much of an improvement over 10th gen?

That is exactly the case.

In some ways (10900K -> 11900K) it was even the opposite of improvement.

Every new generation of processors is faster than the previous, so you end up in a situation (for example) where an i3-10100 from 2020 is equal in performance to an i7-7700 from 2017

### People recommending i5 over i7, what's the reason for this?

Price. And value, when comparing CPUs for gaming, if the i5 gets you 95% there compared to the i7, but the i7 costs 50% more, then the i7, while a better CPU, is a worse value.

i5, i3, i7, that name doesn't matter. You need the actual product name, 12900k, 10400, etc.

### Can I tell anything about the threads etc. off of the 600, 600kf 900k 700k, etc. alone like the gen?

There is no formula, gotta look at the specs of each processor

Only constants are "k" and "f"

k = overclockable

f = no igpu

X = HEDT, usually has a different socket/mobo from the rest of the generation

KS = factory overclocked

There's also other letters that signify different things that are more common outside of the DIY desktop PC space, like "T" for low TDP, and the "U" and "H" variants for low/high power laptops.

### Core? Thread?

Max processing power is:

`Clock (in GHz) x IPC x Number of Cores/Threads.`


1. Clock is readily advertised. Boost clocks are another matter but you may be able to ignore that for the moment.This is essentially how many "cycles" it does per second.  
2. IPC = Instructions Per Clock. You can read up about this, but this is the LEAST exposed one. Generally it improves with newer generations, sometimes significantly. Also it is generally somewhat consistent within generation. This is why an older 4-core, 3.0 GHz chip can be significantly slower than a newer 4-core 2.7 GHz chip. This is how much work is done per cycle.  
3. Number/threads. Easily checked via specs. However not all programs utilize core efficiently. On one end of the spectrum are programs that DO NOT utilize multiple cores well. So regardless of specs you might as well consider this =1. Ont he other side are programs that utilize all core well, for these going from a 4 core to an 8 core (even if it is the same clock and IPC) can double performance. A lot of simulation/math packages are tuned for many cores, so you will probably want more cores.

### Family of Intel

XE - Highest end workstation unlocked for oc

X - Extreme edition / workstation unlocked for oc

K - Unlocked for overclocking

F - No igpu

T - Low power desktop

G - Highest preformance mobile with built in Vega M graphics with 2GB GDDR5 (equivilant to a GTX 1050)

Gx - Nothing to see here, this is just Intel's weird 10nm naming scheme, the number after the G indicates graphics preformance and power level. Basically the same as U and Y series.

M - Mobile Xeon / Old PGA socketed mobile Core series.

H - High preformance mobile (with desktop x30 graphics)

U - Low power mobile (with x20 graphics)

Y - Ultra low power mobile (x1x and x0x graphics)

Xeon - Server / Professional desktop and mobile workstation with ECC support

Core i9-x9xx - Prosumer / Desktop workstation with no ECC support / Highest end mobile.

Core i7-x7xx - High end desktop (not hedt) / Old HEDT workstation with no ECC support / High end mobile

Core i5-xxxx - Mid range desktop / potato HEDT / Mid range mobile

Core i3-xxxx - Low end desktop / mobile

Pentium - Slightly bellow Core i3

Celeron - Entry level potatoes for web browsing
20


