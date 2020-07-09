
# The walker

# The walker starts from point O, walks along OA, AB and BC. When he is in C (C will be in the upper half-plane), what is the distance CO? What is the angle tOC in positive degrees, minutes, seconds?

# Angle tOA is alpha (here 45 degrees), angle hAB is beta (here 30 degrees), angle uBC is gamma(here 60 degrees).

# Task
# function solve(a, b, c, alpha, beta, gamma) with parameters

# a, b, c: positive integers in units of distance (stand for OA, AB, BC)
# alpha, beta, gamma: positive integers in degrees (positive angles are anticlockwise)
# returns an array

# first element: distance CO (rounded to the nearest integer)
# then angle tOC with the third following elements:
# second element of the array: number of degrees in angle tOC (truncated positive integer)
# third element of the array: number of minutes in angle tOC (truncated positive integer)
# fourth element of the array: number of seconds in angle tOC (truncated positive integer)

def solve(a, b, c, alpha, beta, gamma):
    import math 
    
#     This converts alpha, beta and gamma to radians, because by default 
#     that is what python does trig relations with
    [alpha_rad, beta_rad, gamma_rad] = [
        math.radians(alpha),
        math.radians(beta),
        math.radians(gamma)
    ] 


#   Here we make use of some basic trigonometry in order to determine the x value and y value of the point C
    x_end = a * math.cos(alpha_rad) - b * math.sin(beta_rad) - c * math.cos(gamma_rad)
    y_end = a * math.sin(alpha_rad) + b * math.cos(beta_rad) - c * math.sin(gamma_rad)
    
#   Applying pythagoreans theorem to solve for the distance between C and O
    dCO =  round(math.sqrt( pow(x_end,2)  + pow(y_end,2) ))
    
#   Apply trig to solve for the inside angle with sides x_end and y_end
#   Subtract answer from pi because we are measuring from the positive X axis
#   This is the radian equivalent of subtracting from 180 degrees
    tOC_rad = math.pi - math.atan( y_end / -x_end )
    
#   Convert back to degrees
    tOC_deg = math.floor(math.degrees( tOC_rad))
    
#     def deg_to_minutes(deg):
#         total_seconds = deg * 3600
#         if( deg / 60  == 0 ):
#             total_minutes = deg / 60
#             total_seconds = 0
#         elif(total_seconds > 60):
#             total_seconds = ( deg % 60)
            
    
    
    print( dCO )
    return [ dCO , tOC_deg, tOC_min ]   
    # return [ Distance CO(rounded to nearest integer) , angle tOC( degrees), angle tOC( Minutes ), angle(seconds )