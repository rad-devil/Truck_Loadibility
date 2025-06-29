import { useState } from "react";
import Select from "react-select";
import React from 'react';


const CartonSelector = ({ onSelectionChange }) => {

  const [selectedCartons, setSelectedCartons] = useState([]);
  // Sample Carton Data (Replace with actual data)
  const cartons = [
    {"biscuit_type": "Sweetmeal Digestive(Happy Otter)", "weight": "250g", "length": 0.380, "width": 0.175, "height": 0.215, "quantity": 20, "volume": 0.014298},
    {"biscuit_type": "Morning Coffee (Happy Otter)", "weight": "250g", "length": 0.340, "width": 0.230, "height": 0.185, "quantity": 20, "volume": 0.014467},
    {"biscuit_type": "London Treats Glucose", "weight": "48g", "length": 0.320, "width": 0.200, "height": 0.130, "quantity": 48, "volume": 0.008320},
    {"biscuit_type": "London Treats Milk Maid", "weight": "48g", "length": 0.320, "width": 0.200, "height": 0.130, "quantity": 48, "volume": 0.008320},
    {"biscuit_type": "London Treats Nice", "weight": "48g", "length": 0.300, "width": 0.190, "height": 0.145, "quantity": 48, "volume": 0.008265},
    {"biscuit_type": "London Treats Coconut Cookies ATC", "weight": "200g", "length": 0.350, "width": 0.260, "height": 0.235, "quantity": 24, "volume": 0.021385},
    {"biscuit_type": "London Treats Ginger Snap ATC", "weight": "200g", "length": 0.350, "width": 0.260, "height": 0.235, "quantity": 24, "volume": 0.021385},
    {"biscuit_type": "London Treats Glucose", "weight": "41g", "length": 0.380, "width": 0.255, "height": 0.160, "quantity": 100, "volume": 0.015504},
    {"biscuit_type": "Anmol Gluco Zing", "weight": "45g", "length": 0.315, "width": 0.200, "height": 0.125, "quantity": 48, "volume": 0.007875},
    {"biscuit_type": "Anmol Nice", "weight": "45g", "length": 0.295, "width": 0.180, "height": 0.140, "quantity": 48, "volume": 0.007434},
    {"biscuit_type": "Anmol Gluco Zing", "weight": "45g", "length": 0.380, "width": 0.255, "height": 0.160, "quantity": 100, "volume": 0.015504},
    {"biscuit_type": "Anmol Hit & Run", "weight": "70g", "length": 0.300, "width": 0.225, "height": 0.214, "quantity": 70, "volume": 0.014445},
    {"biscuit_type": "Anmol Hit & Run", "weight": "65g", "length": 0.300, "width": 0.220, "height": 0.214, "quantity": 70, "volume": 0.014124},
    {"biscuit_type": "Anmol Hit & Run", "weight": "75g", "length": 0.300, "width": 0.240, "height": 0.214, "quantity": 70, "volume": 0.015408},
    {"biscuit_type": "Anmol Ginger Cookies ATC", "weight": "100g", "length": 0.340, "width": 0.232, "height": 0.132, "quantity": 24, "volume": 0.010412},
    {"biscuit_type": "Anmol Hit & Run", "weight": "75g", "length": 0.265, "width": 0.245, "height": 0.175, "quantity": 48, "volume": 0.011362},
    {"biscuit_type": "Anmol Coconuty", "weight": "50g", "length": 0.250, "width": 0.250, "height": 0.167, "quantity": 48, "volume": 0.010438},
    {"biscuit_type": "Anmol Nice", "weight": "45g", "length": 0.370, "width": 0.245, "height": 0.205, "quantity": 120, "volume": 0.018583},
    {"biscuit_type": "Anmol Gluco Zing", "weight": "45g", "length": 0.385, "width": 0.245, "height": 0.185, "quantity": 120, "volume": 0.017450},
    {"biscuit_type": "Hit & Run", "weight": "60g", "length": 0.440, "width": 0.265, "height": 0.260, "quantity": 144, "volume": 0.030316},
    {"biscuit_type": "Butter Bake", "weight": "40g", "length": 0.365, "width": 0.220, "height": 0.250, "quantity": 120, "volume": 0.020075},
    {"biscuit_type": "Butter Bake", "weight": "45g", "length": 0.280, "width": 0.170, "height": 0.260, "quantity": 72, "volume": 0.012376},
    {"biscuit_type": "Butter Bake", "weight": "45g", "length": 0.275, "width": 0.178, "height": 0.180, "quantity": 48, "volume": 0.008811},
    {"biscuit_type": "Butter Bake", "weight": "40g", "length": 0.275, "width": 0.178, "height": 0.180, "quantity": 48, "volume": 0.008811},
    {"biscuit_type": "Milk Made", "weight": "40g", "length": 0.315, "width": 0.180, "height": 0.125, "quantity": 48, "volume": 0.007088},
    {"biscuit_type": "Anmol Milk & Honey", "weight": "41g", "length": 0.315, "width": 0.180, "height": 0.125, "quantity": 48, "volume": 0.007088},
    {"biscuit_type": "Anmol Glucose", "weight": "35g", "length": 0.275, "width": 0.185, "height": 0.118, "quantity": 48, "volume": 0.006003},
    {"biscuit_type": "Anmol Nice", "weight": "35g", "length": 0.275, "width": 0.185, "height": 0.118, "quantity": 48, "volume": 0.006003},
    {"biscuit_type": "Anmol Milkmade", "weight": "35g", "length": 0.275, "width": 0.185, "height": 0.118, "quantity": 48, "volume": 0.006003},
    {"biscuit_type": "Anmol Glucose", "weight": "35g", "length": 0.345, "width": 0.235, "height": 0.290, "quantity": 200, "volume": 0.023512},
    {"biscuit_type": "Anmol Nice", "weight": "35g", "length": 0.345, "width": 0.235, "height": 0.290, "quantity": 200, "volume": 0.023512},
    {"biscuit_type": "Anmol Milk Made", "weight": "35g", "length": 0.345, "width": 0.235, "height": 0.290, "quantity": 200, "volume": 0.023512},
    {"biscuit_type": "Anmol Nice", "weight": "41g", "length": 0.295, "width": 0.180, "height": 0.140, "quantity": 72, "volume": 0.010583},  
    {"biscuit_type": "Digestive(ATC)", "weight": "100g", "length": 0.350, "width": 0.250, "height": 0.235, "quantity": 48, "volume": 0.020563},
    {"biscuit_type": "Digestive(ATC)", "weight": "200g", "length": 0.340, "width": 0.235, "height": 0.250, "quantity": 24, "volume": 0.019975},
    {"biscuit_type": "Milk & Honey", "weight": "45g", "length": 0.315, "width": 0.200, "height": 0.130, "quantity": 48, "volume": 0.008190},
    {"biscuit_type": "Alkaree Milk & Honey", "weight": "40g", "length": 0.315, "width": 0.190, "height": 0.125, "quantity": 48, "volume": 0.007481},
    {"biscuit_type": "Alkaree Nice", "weight": "40g", "length": 0.295, "width": 0.180, "height": 0.140, "quantity": 48, "volume": 0.007434},
    {"biscuit_type": "Anmol Milk Made", "weight": "40g", "length": 0.315, "width": 0.175, "height": 0.185, "quantity": 72, "volume": 0.010198},
    {"biscuit_type": "Anmol Nice", "weight": "45g", "length": 0.295, "width": 0.175, "height": 0.205, "quantity": 72, "volume": 0.010583}, 
    {"biscuit_type": "Anmol Coconut Cookies ATC", "weight": "200g", "length": 0.350, "width": 0.260, "height": 0.235, "quantity": 24, "volume": 0.021385},  
    {"biscuit_type": "Anmol Ginger Snap ATC", "weight": "200g", "length": 0.350, "width": 0.260, "height": 0.235, "quantity": 24, "volume": 0.021385},  
    {"biscuit_type": "YAP CHOCOCHIP", "weight": "75g", "length": 0.300, "width": 0.240, "height": 0.214, "quantity": 70, "volume": 0.015408},  
    {"biscuit_type": "YAP BUTTER BISCOITOS", "weight": "42g", "length": 0.250, "width": 0.180, "height": 0.170, "quantity": 48, "volume": 0.007650},  
    {"biscuit_type": "YAP DIGESTIVO", "weight": "240g", "length": 0.355, "width": 0.230, "height": 0.150, "quantity": 12, "volume": 0.012248},  
    {"biscuit_type": "YAP GULOSO", "weight": "34g", "length": 0.310, "width": 0.160, "height": 0.125, "quantity": 48, "volume": 0.007363},
    {"biscuit_type": "YAP GULOSO", "weight": "45g", "length": 0.310, "width": 0.190, "height": 0.125, "quantity": 48, "volume": 0.007363},  
    {"biscuit_type": "YAP NICE", "weight": "34g", "length": 0.295, "width": 0.160, "height": 0.140, "quantity": 48, "volume": 0.006620},  
    {"biscuit_type": "YAP NICE", "weight": "45g", "length": 0.295, "width": 0.180, "height": 0.140, "quantity": 48, "volume": 0.007434},  
    {"biscuit_type": "YAP DIGESTIVO", "weight": "120g", "length": 0.320, "width": 0.250, "height": 0.215, "quantity": 48, "volume": 0.017200},  
    {"biscuit_type": "Neskers Butter Bite", "weight": "90g", "length": 0.440, "width": 0.245, "height": 0.162, "quantity": 48, "volume": 0.017464},  
    {"biscuit_type": "Neskers Cashew Bite", "weight": "90g", "length": 0.440, "width": 0.245, "height": 0.162, "quantity": 48, "volume": 0.017464},  
    {"biscuit_type": "Neskers Pista Bite", "weight": "90g", "length": 0.440, "width": 0.245, "height": 0.162, "quantity": 48, "volume": 0.017464},  
    {"biscuit_type": "Neskers Digestive ATC", "weight": "380g", "length": 0.475, "width": 0.265, "height": 0.315, "quantity": 24, "volume": 0.039651},  
    {"biscuit_type": "Neskers Digestive", "weight": "250g", "length": 0.390, "width": 0.260, "height": 0.255, "quantity": 24, "volume": 0.025857},  
    {"biscuit_type": "Smiley Butter Cookies", "weight": "75g", "length": 0.440, "width": 0.230, "height": 0.162, "quantity": 48, "volume": 0.016394},  
    {"biscuit_type": "Smiley Cashew Cookies", "weight": "75g", "length": 0.440, "width": 0.230, "height": 0.162, "quantity": 48, "volume": 0.016394},  
    {"biscuit_type": "Smiley Pista Cookies", "weight": "75g", "length": 0.440, "width": 0.230, "height": 0.162, "quantity": 48, "volume": 0.016394},  
    {"biscuit_type": "Dahlia Kokoye Nice", "weight": "35g", "length": 0.355, "width": 0.280, "height": 0.350, "quantity": 288, "volume": 0.034790},  
    {"biscuit_type": "Dahlia Milk", "weight": "35g", "length": 0.355, "width": 0.280, "height": 0.350, "quantity": 288, "volume": 0.034790},  
    {"biscuit_type": "Dahlia Glucose", "weight": "35g", "length": 0.355, "width": 0.280, "height": 0.350, "quantity": 288, "volume": 0.034790},  
    {"biscuit_type": "Sofiz Glucose", "weight": "72g", "length": 0.440, "width": 0.280, "height": 0.295, "quantity": 168, "volume": 0.036344},  
    {"biscuit_type": "Riva Delights Digestive", "weight": "350g", "length": 0.475, "width": 0.255, "height": 0.315, "quantity": 24, "volume": 0.038154},  
    {"biscuit_type": "Riya Gold Digestive", "weight": "150g", "length": 0.380, "width": 0.190, "height": 0.248, "quantity": 24, "volume": 0.017906},  
    {"biscuit_type": "Holla Glucose", "weight": "30g", "length": 0.200, "width": 0.305, "height": 0.230, "quantity": 96, "volume": 0.020344},  
    {"biscuit_type": "Almathani Glucose", "weight": "30g", "length": 0.120, "width": 0.305, "height": 0.230, "quantity": 120, "volume": 0.012276},  
    {"biscuit_type": "Holland Park Digestive", "weight": "250g", "length": 0.390, "width": 0.260, "height": 0.255, "quantity": 24, "volume": 0.025857},  
    {"biscuit_type": "Holland Park Butter Cookies", "weight": "90g", "length": 0.440, "width": 0.245, "height": 0.162, "quantity": 48, "volume": 0.017464},
    {"biscuit_type": "Holland Park Cashew Cookies", "weight": "90g", "length": 0.440, "width": 0.245, "height": 0.162, "quantity": 48, "volume": 0.017464},
    {"biscuit_type": "Holland Park Glucose", "weight": "45g", "length": 0.250, "width": 0.185, "height": 0.235, "quantity": 48, "volume": 0.017464},
    {"biscuit_type": "Holland Park Glucose", "weight": "41g", "length": 0.260, "width": 0.178, "height": 0.305, "quantity": 48, "volume": 0.017464},
    {"biscuit_type": "Holland Park Glucose", "weight": "45g", "length": 0.315, "width": 0.200, "height": 0.240, "quantity": 48, "volume": 0.017464},
    {"biscuit_type": "Holland Park Nice", "weight": "45g", "length": 0.245, "width": 0.175, "height": 0.268, "quantity": 48, "volume": 0.017464},
    {"biscuit_type": "Holland Park Nice", "weight": "41g", "length": 0.295, "width": 0.165, "height": 0.268, "quantity": 48, "volume": 0.017464},
    {"biscuit_type": "Holland Park Nice", "weight": "45g", "length": 0.300, "width": 0.190, "height": 0.273, "quantity": 48, "volume": 0.017464},
    {"biscuit_type": "Holland Park Malt & Milk ", "weight": "45g", "length": 0.250, "width": 0.180, "height": 0.232, "quantity": 48, "volume": 0.017464},
    {"biscuit_type": "Holland Park Malt & Milk ", "weight": "45g", "length": 0.315, "width": 0.200, "height": 0.240, "quantity": 48, "volume": 0.017464},
    {"biscuit_type": "Holland Park Butter Cookies ", "weight": "180g", "length": 0.355, "width": 0.255, "height": 0.232, "quantity": 48, "volume": 0.017464},
    {"biscuit_type": "Sona Cashew Cookies", "weight": "90g", "length": 0.430, "width": 0.245, "height": 0.172, "quantity": 48, "volume": 0.018120},
    {"biscuit_type": "Sona Butter Cookies", "weight": "90g", "length": 0.430, "width": 0.245, "height": 0.172, "quantity": 48, "volume": 0.018120},
    {"biscuit_type": "Anmol Gluco Zing", "weight": "40g", "length": 0.315, "width": 0.190, "height": 0.140, "quantity": 48, "volume": 0.007481},
    {"biscuit_type": "Anmol Nice", "weight": "40g", "length": 0.295, "width": 0.180, "height": 0.140, "quantity": 48, "volume": 0.007434},
    {"biscuit_type": "Digestive Sugar Free", "weight": "200g", "length": 0.315, "width": 0.235, "height": 0.235, "quantity": 24, "volume": 0.017396},
    {"biscuit_type": "Holland Park Bonus (Milkshort Cake)", "weight": "65/70g", "length": 0.295, "width": 0.220, "height": 0.198, "quantity": 48, "volume": 0.013095},
    {"biscuit_type": "Sweetmeal Digestive (Hayfield)", "weight": "250g", "length": 0.380, "width": 0.273, "height": 0.140, "quantity": 20, "volume": 0.014298},
    {"biscuit_type": "Morning Coffee (Hayfield)", "weight": "250g", "length": 0.340, "width": 0.230, "height": 0.185, "quantity": 20, "volume": 0.014467},
    {"biscuit_type": "Butter Bake Cashew", "weight": "40g", "length": 0.275, "width": 0.178, "height": 0.175, "quantity": 48, "volume": 0.008566},
    {"biscuit_type": "Smiley’s Cashew Cookies", "weight": "67.5g", "length": 0.415, "width": 0.260, "height": 0.155, "quantity": 60, "volume": 0.016725},
    {"biscuit_type": "Smiley’s Butter Cookies", "weight": "67.5g", "length": 0.415, "width": 0.260, "height": 0.155, "quantity": 60, "volume": 0.016725},
    {"biscuit_type": "Milk Bis Anmol Milkshort Cake", "weight": "65/70g", "length": 0.295, "width": 0.220, "height": 0.193, "quantity": 48, "volume": 0.012526},
    {"biscuit_type": "Yap Choco Chips", "weight": "40g", "length": 0.265, "width": 0.185, "height": 0.165, "quantity": 48, "volume": 0.006777},
    {"biscuit_type": "Holland Park Nice", "weight": "45g", "length": 0.295, "width": 0.180, "height": 0.140, "quantity": 48, "volume": 0.007434},
    {"biscuit_type": "Holland Park Glucose", "weight": "45g", "length": 0.315, "width": 0.200, "height": 0.125, "quantity": 48, "volume": 0.007875},
    {"biscuit_type": "Holland Park Malt & Milk", "weight": "45g", "length": 0.360, "width": 0.275, "height": 0.140, "quantity": 48, "volume": 0.021573},
    {"biscuit_type": "Digestive", "weight": "100g", "length": 0.295, "width": 0.220, "height": 0.198, "quantity": 24, "volume": 0.015630},
    {"biscuit_type": "Holland Park Bonus (Milkshort Cake)", "weight": "65g", "length": 0.295, "width": 0.220, "height": 0.198, "quantity": 24, "volume": 0.005630},
    {"biscuit_type": "Anmol Nice", "weight": "35g", "length": 0.295, "width": 0.235, "height": 0.175, "quantity": 120, "volume": 0.014289},
    {"biscuit_type": "Anmol Glucose", "weight": "35g", "length": 0.295, "width": 0.235, "height": 0.175, "quantity": 120, "volume": 0.015011},
    {"biscuit_type": "Nezline Choco Chips", "weight": "65g", "length": 0.410, "width": 0.245, "height": 0.200, "quantity": 64, "volume": 0.014394},
    {"biscuit_type": "Nezline Milko Bis Milk Short Cake", "weight": "65g", "length": 0.410, "width": 0.245, "height": 0.200, "quantity": 64, "volume": 0.018450},
    {"biscuit_type": "Digestive", "weight": "75g", "length": 0.360, "width": 0.235, "height": 0.240, "quantity": 24, "volume": 0.019845},
    {"biscuit_type": "Coconut Premium Cookies", "weight": "70g", "length": 0.260, "width": 0.230, "height": 0.200, "quantity": 40, "volume": 0.011948},
    {"biscuit_type": "Yap Chocolate Glucose", "weight": "45g", "length": 0.310, "width": 0.190, "height": 0.125, "quantity": 48, "volume": 0.007363},
    {"biscuit_type": "Digestive", "weight": "75g", "length": 0.225, "width": 0.185, "height": 0.240, "quantity": 24, "volume": 0.009990},
    {"biscuit_type": "Digestive", "weight": "125g", "length": 0.280, "width": 0.185, "height": 0.240, "quantity": 24, "volume": 0.012432},
    {"biscuit_type": "Hit & Run", "weight": "65g", "length": 0.295, "width": 0.235, "height": 0.215, "quantity": 48, "volume": 0.021016},
    {"biscuit_type": "Digestive", "weight": "100g", "length": 0.295, "width": 0.275, "height": 0.175, "quantity": 24, "volume": 0.014197},
    {"biscuit_type": "Glucozing", "weight": "40g", "length": 0.380, "width": 0.190, "height": 0.125, "quantity": 120, "volume": 0.009025},
    {"biscuit_type": "Yummy Chocolate", "weight": "65g", "length": 0.315, "width": 0.202, "height": 0.162, "quantity": 60, "volume": 0.010336},
    {"biscuit_type": "Yummy Vanilla", "weight": "90g", "length": 0.295, "width": 0.200, "height": 0.210, "quantity": 48, "volume": 0.012390},
    {"biscuit_type": "Yummy Chocolate", "weight": "90g", "length": 0.295, "width": 0.200, "height": 0.210, "quantity": 48, "volume": 0.012390},
    {"biscuit_type": "Petit Beurre (Cracks)", "weight": "200g", "length": 0.290, "width": 0.155, "height": 0.280, "quantity": 15, "volume": 0.012530},
    {"biscuit_type": "Petit Beurre (Regular)", "weight": "100g", "length": 0.260, "width": 0.185, "height": 0.185, "quantity": 144, "volume": 0.066100},
    {"biscuit_type": "Petit Beurre (SRP)", "weight": "100g", "length": 0.240, "width": 0.215, "height": 0.175, "quantity": 24, "volume": 0.009030},
    {"biscuit_type": "Petit Beurre (Chocolate)", "weight": "100g", "length": 0.240, "width": 0.185, "height": 0.185, "quantity": 144, "volume": 0.066161},
    {"biscuit_type": "Petit Beurre (Regular)", "weight": "250g", "length": 0.320, "width": 0.205, "height": 0.280, "quantity": 20, "volume": 0.018368},
    {"biscuit_type": "Yumm Chocolate Round Cream", "weight": "175/120g", "length": 0.540, "width": 0.355, "height": 0.195, "quantity": 48, "volume": 0.037382},
    {"biscuit_type": "Yumm Strawberry Round Cream", "weight": "175/120g", "length": 0.540, "width": 0.355, "height": 0.195, "quantity": 48, "volume": 0.037382},
    {"biscuit_type": "Yumm Vanilla Round Cream", "weight": "175/120g", "length": 0.540, "width": 0.355, "height": 0.195, "quantity": 48, "volume": 0.037382},
    {"biscuit_type": "Yumm Mango Round Cream", "weight": "175/120g", "length": 0.540, "width": 0.355, "height": 0.195, "quantity": 48, "volume": 0.037382},
    {"biscuit_type": "Yumm Orange Round Cream", "weight": "175/120g", "length": 0.540, "width": 0.355, "height": 0.195, "quantity": 48, "volume": 0.037382},
    {"biscuit_type": "Creemos Chocolate", "weight": "85/80g", "length": 0.315, "width": 0.220, "height": 0.110, "quantity": 24, "volume": 0.007623},
    {"biscuit_type": "Creemos Orange", "weight": "85/80g", "length": 0.315, "width": 0.220, "height": 0.110, "quantity": 24, "volume": 0.007623},
    {"biscuit_type": "Creemos Strawberry", "weight": "85/80g", "length": 0.315, "width": 0.220, "height": 0.110, "quantity": 24, "volume": 0.007623},
    {"biscuit_type": "Creemos Vanilla", "weight": "85/80g", "length": 0.315, "width": 0.220, "height": 0.110, "quantity": 24, "volume": 0.007623},
    {"biscuit_type": "Creemos Lemon", "weight": "85/80g", "length": 0.315, "width": 0.220, "height": 0.110, "quantity": 24, "volume": 0.007623},
    {"biscuit_type": "Petit Beurre", "weight": "100g", "length": 0.320, "width": 0.225, "height": 0.220, "quantity": 24, "volume": 0.015840},
    {"biscuit_type": "London Treat Salted Cracker", "weight": "280g", "length": 0.315, "width": 0.220, "height": 0.218, "quantity": 12, "volume": 0.021480},
    {"biscuit_type": "London Treat 2in1 Tea Time", "weight": "84g", "length": 0.270, "width": 0.250, "height": 0.185, "quantity": 24, "volume": 0.012885},
    {"biscuit_type": "Riya Gold Salted", "weight": "45g", "length": 0.275, "width": 0.200, "height": 0.190, "quantity": 48, "volume": 0.012488},
    {"biscuit_type": "Anmol Snack It", "weight": "45g", "length": 0.275, "width": 0.200, "height": 0.190, "quantity": 48, "volume": 0.012488},
    {"biscuit_type": "Anmol Yummy Chocolate", "weight": "50g", "length": 0.255, "width": 0.215, "height": 0.170, "quantity": 48, "volume": 0.009320},
    {"biscuit_type": "Anmol Yummy Orange", "weight": "50g", "length": 0.255, "width": 0.215, "height": 0.170, "quantity": 48, "volume": 0.009320},
    {"biscuit_type": "Anmol Yummy Milk", "weight": "50", "length": 0.255, "width": 0.215, "height": 0.170, "quantity": 48, "volume": 0.009320},
    {"biscuit_type": "Anmol Jadoo", "weight": "100", "length": 0.350, "width": 0.185, "height": 0.230, "quantity": 24, "volume": 0.014893},
    {"biscuit_type": "Anmol Lemon Mazaa", "weight": "50", "length": 0.315, "width": 0.205, "height": 0.150, "quantity": 48, "volume": 0.009686},
    {"biscuit_type": "Yummy Chocolate", "weight": "90", "length": 0.295, "width": 0.195, "height": 0.105, "quantity": 24, "volume": 0.006040},
    {"biscuit_type": "Yummy Orange", "weight": "90", "length": 0.295, "width": 0.195, "height": 0.105, "quantity": 24, "volume": 0.006040},
    {"biscuit_type": "Creemos Chocolate", "weight": "85", "length": 0.315, "width": 0.220, "height": 0.110, "quantity": 24, "volume": 0.007623},
    {"biscuit_type": "Creemos Orange", "weight": "85", "length": 0.315, "width": 0.220, "height": 0.110, "quantity": 24, "volume": 0.007623},
    {"biscuit_type": "Creemos Strawberry", "weight": "85", "length": 0.315, "width": 0.220, "height": 0.110, "quantity": 24, "volume": 0.007623},
    {"biscuit_type": "Creemos Vanilla", "weight": "85", "length": 0.315, "width": 0.220, "height": 0.110, "quantity": 24, "volume": 0.007623},
    {"biscuit_type": "Creemos Lemon", "weight": "85", "length": 0.315, "width": 0.220, "height": 0.110, "quantity": 24, "volume": 0.007623},
    {"biscuit_type": "Yap Yumm Lemon Biscuits", "weight": "75", "length": 0.270, "width": 0.250, "height": 0.165, "quantity": 48, "volume": 0.011138},
    {"biscuit_type": "Yap Yumm Mango Biscuits", "weight": "75", "length": 0.270, "width": 0.250, "height": 0.165, "quantity": 48, "volume": 0.011138},
    {"biscuit_type": "Yap Yumm Strawberry Biscuits", "weight": "75", "length": 0.270, "width": 0.250, "height": 0.165, "quantity": 48, "volume": 0.011138},
    {"biscuit_type": "Yap Yumm Chocolate Biscuits", "weight": "75", "length": 0.270, "width": 0.250, "height": 0.165, "quantity": 48, "volume": 0.011138},
    {"biscuit_type": "Yap Yumm Orange Biscuits", "weight": "75", "length": 0.270, "width": 0.250, "height": 0.165, "quantity": 48, "volume": 0.011138},
    {"biscuit_type": "Yap Snaxi Biscuits", "weight": "42", "length": 0.270, "width": 0.250, "height": 0.185, "quantity": 48, "volume": 0.012488},
    {"biscuit_type": "Yap Doce E Sal Biscuits", "weight": "42", "length": 0.265, "width": 0.215, "height": 0.185, "quantity": 48, "volume": 0.010540},
    {"biscuit_type": "Yap Creemos Lemon", "weight": "85", "length": 0.315, "width": 0.220, "height": 0.110, "quantity": 24, "volume": 0.007623},
    {"biscuit_type": "Yap Creemos Mango", "weight": "85", "length": 0.315, "width": 0.220, "height": 0.110, "quantity": 24, "volume": 0.007623},
    {"biscuit_type": "Yap Creemos Strawberry", "weight": "85", "length": 0.315, "width": 0.220, "height": 0.110, "quantity": 24, "volume": 0.007623},
    {"biscuit_type": "Yap Creemos Chocolate", "weight": "85", "length": 0.315, "width": 0.220, "height": 0.110, "quantity": 24, "volume": 0.007623},
    {"biscuit_type": "Yap Creemos Orange", "weight": "85", "length": 0.315, "width": 0.220, "height": 0.110, "quantity": 24, "volume": 0.007623},
    {"biscuit_type": "Yap Marie", "weight": "100", "length": 0.280, "width": 0.250, "height": 0.190, "quantity": 24, "volume": 0.013300},
    {"biscuit_type": "Creme Biscuits Chocolate Flavour", "weight": "90", "length": 0.315, "width": 0.190, "height": 0.105, "quantity": 24, "volume": 0.006284},
    {"biscuit_type": "Creme Biscuits Mango Flavour", "weight": "90", "length": 0.315, "width": 0.190, "height": 0.105, "quantity": 24, "volume": 0.006284},
    {"biscuit_type": "Creme Biscuits Orange Flavour", "weight": "90", "length": 0.315, "width": 0.190, "height": 0.105, "quantity": 24, "volume": 0.006284},
    {"biscuit_type": "2in1", "weight": "90", "length": 0.315, "width": 0.190, "height": 0.105, "quantity": 24, "volume": 0.006284},
    {"biscuit_type": "Creme Biscuits Strawberry Flavour", "weight": "90", "length": 0.315, "width": 0.190, "height": 0.105, "quantity": 24, "volume": 0.006284},
    {"biscuit_type": "Puff Creme Chocolate Flavour", "weight": "150/120", "length": 0.540, "width": 0.355, "height": 0.195, "quantity": 48, "volume": 0.037382},
    {"biscuit_type": "Puff Creme Vanilla Flavour", "weight": "150/120", "length": 0.540, "width": 0.355, "height": 0.185, "quantity": 48, "volume": 0.035465},
    {"biscuit_type": "Puff Creme Strawberry Flavour", "weight": "150/120", "length": 0.540, "width": 0.355, "height": 0.185, "quantity": 48, "volume": 0.035465},
    {"biscuit_type": "Puff Creme Lemon Flavour", "weight": "150/120", "length": 0.540, "width": 0.355, "height": 0.185, "quantity": 48, "volume": 0.035465},
    {"biscuit_type": "Puff Creme Orange Flavour", "weight": "150/120", "length": 0.540, "width": 0.355, "height": 0.185, "quantity": 48, "volume": 0.035465},
    {"biscuit_type": "Petit Buerre", "weight": "100", "length": 0.240, "width": 0.215, "height": 0.175, "quantity": 24, "volume": 0.009030},
    {"biscuit_type": "Creme Biscuits Chocolate Flavour", "weight": "45", "length": 0.360, "width": 0.248, "height": 0.155, "quantity": 100, "volume": 0.013838},
    {"biscuit_type": "Creme Biscuits Mango Flavour", "weight": "45", "length": 0.360, "width": 0.248, "height": 0.155, "quantity": 100, "volume": 0.013838},
    {"biscuit_type": "Creme Biscuits Orange Flavour", "weight": "45", "length": 0.360, "width": 0.248, "height": 0.155, "quantity": 100, "volume": 0.013838},
    {"biscuit_type": "Creme Biscuits Strawberry Flavour", "weight": "45", "length": 0.360, "width": 0.248, "height": 0.155, "quantity": 100, "volume": 0.013838},
    {"biscuit_type": "Creme Biscuits Vanilla Flavour", "weight": "45", "length": 0.360, "width": 0.248, "height": 0.155, "quantity": 100, "volume": 0.013838},
    {"biscuit_type": "Yumm Chocolate Cream Flavour", "weight": "150", "length": 0.540, "width": 0.345, "height": 0.185, "quantity": 48, "volume": 0.034466},
    {"biscuit_type": "Yumm Orange Cream Flavour", "weight": "150", "length": 0.540, "width": 0.345, "height": 0.185, "quantity": 48, "volume": 0.034466},
    {"biscuit_type": "Yumm Vanilla Cream Flavour", "weight": "150", "length": 0.540, "width": 0.345, "height": 0.185, "quantity": 48, "volume": 0.034466},
    {"biscuit_type": "Yumm Mango Cream Flavour", "weight": "150", "length": 0.540, "width": 0.345, "height": 0.185, "quantity": 48, "volume": 0.034466},
    {"biscuit_type": "Yumm Strawberry Cream Flavour", "weight": "150", "length": 0.540, "width": 0.345, "height": 0.185, "quantity": 48, "volume": 0.034466},
    {"biscuit_type": "Creme Biscuits Chocolate Flavour", "weight": "82", "length": 0.305, "width": 0.190, "height": 0.098, "quantity": 24, "volume": 0.005679},
    {"biscuit_type": "Creme Biscuits Mango Flavour", "weight": "82", "length": 0.305, "width": 0.190, "height": 0.098, "quantity": 24, "volume": 0.005679},
    {"biscuit_type": "Creme Biscuits Orange Flavour", "weight": "82", "length": 0.305, "width": 0.190, "height": 0.098, "quantity": 24, "volume": 0.005679},
    {"biscuit_type": "Creme Biscuits Vanilla Flavour", "weight": "82", "length": 0.305, "width": 0.190, "height": 0.098, "quantity": 24, "volume": 0.005679},
    {"biscuit_type": "Creme Biscuits Strawberry Flavour", "weight": "82", "length": 0.305, "width": 0.190, "height": 0.098, "quantity": 24, "volume": 0.005679},
    {"biscuit_type": "Choco Mazaa", "weight": "50", "length": 0.315, "width": 0.250, "height": 0.150, "quantity": 48, "volume": 0.009686},
    {"biscuit_type": "Veg Munch", "weight": "90", "length": 0.265, "width": 0.265, "height": 0.125, "quantity": 24, "volume": 0.008778},
    {"biscuit_type": "Snaxi", "weight": "40", "length": 0.470, "width": 0.275, "height": 0.175, "quantity": 120, "volume": 0.028435},
    {"biscuit_type": "Yumm Chocolate Cream Flavour", "weight": "120", "length": 0.495, "width": 0.355, "height": 0.195, "quantity": 48, "volume": 0.034266},
    {"biscuit_type": "Yumm Orange Cream Flavour", "weight": "120", "length": 0.495, "width": 0.355, "height": 0.195, "quantity": 48, "volume": 0.034266},
    {"biscuit_type": "Yumm Vanilla Cream Flavour", "weight": "120", "length": 0.495, "width": 0.355, "height": 0.195, "quantity": 48, "volume": 0.034266},
    {"biscuit_type": "Yumm Mango Cream Flavour", "weight": "120", "length": 0.495, "width": 0.355, "height": 0.195, "quantity": 48, "volume": 0.034266},
    {"biscuit_type": "Yumm Strawberry Cream Flavour", "weight": "120", "length": 0.495, "width": 0.355, "height": 0.195, "quantity": 48, "volume": 0.034266},
    {"biscuit_type": "Creemos Chocolate", "weight": "75", "length": 0.315, "width": 0.220, "height": 0.110, "quantity": 24, "volume": 0.007623},
    {"biscuit_type": "Creemos Orange", "weight": "75", "length": 0.315, "width": 0.220, "height": 0.110, "quantity": 24, "volume": 0.007623},
    {"biscuit_type": "Creemos Vanilla", "weight": "75", "length": 0.315, "width": 0.220, "height": 0.110, "quantity": 24, "volume": 0.007623},
    {"biscuit_type": "Creemos Lemon", "weight": "75", "length": 0.315, "width": 0.220, "height": 0.110, "quantity": 24, "volume": 0.007623},
    {"biscuit_type": "Creemos Strawberry", "weight": "75", "length": 0.315, "width": 0.220, "height": 0.110, "quantity": 24, "volume": 0.007623},
    {"biscuit_type": "Yap Yumm Lemon Biscuits", "weight": "75", "length": 0.270, "width": 0.250, "height": 0.165, "quantity": 48, "volume": 0.011138},
    {"biscuit_type": "Yap Yumm Mango Biscuits", "weight": "75", "length": 0.270, "width": 0.250, "height": 0.165, "quantity": 48, "volume": 0.011138},
    {"biscuit_type": "Yap Yumm Pineapple Biscuits", "weight": "75", "length": 0.270, "width": 0.250, "height": 0.165, "quantity": 48, "volume": 0.011138},
    {"biscuit_type": "Yap Creemos Lemon", "weight": "85", "length": 0.315, "width": 0.220, "height": 0.110, "quantity": 24, "volume": 0.007623},
    {"biscuit_type": "Yap Creemos Mango", "weight": "85", "length": 0.315, "width": 0.220, "height": 0.110, "quantity": 24, "volume": 0.007623},
    {"biscuit_type": "Yap Creemos Pineapple", "weight": "85", "length": 0.315, "width": 0.220, "height": 0.110, "quantity": 24, "volume": 0.007623},
    {"biscuit_type": "Holland Park Soneir Cream Chocolate", "weight": "150", "length": 0.540, "width": 0.355, "height": 0.195, "quantity": 48, "volume": 0.037382},
    {"biscuit_type": "Holland Park Soneir Cream Strawberry", "weight": "150", "length": 0.540, "width": 0.355, "height": 0.195, "quantity": 48, "volume": 0.037382},
    {"biscuit_type": "Holland Park Soneir Cream Vanilla", "weight": "150", "length": 0.540, "width": 0.355, "height": 0.195, "quantity": 48, "volume": 0.037382},
    {"biscuit_type": "Anmol Creemos Strawberry", "weight": "79", "length": 0.315, "width": 0.220, "height": 0.110, "quantity": 24, "volume": 0.007623},
    {"biscuit_type": "Anmol Creemos Orange", "weight": "79", "length": 0.315, "width": 0.220, "height": 0.110, "quantity": 24, "volume": 0.007623},
    {"biscuit_type": "Anmol Creemos Lemon", "weight": "79", "length": 0.315, "width": 0.220, "height": 0.110, "quantity": 24, "volume": 0.007623},
    {"biscuit_type": "Anmol Creemos Vanilla", "weight": "79", "length": 0.315, "width": 0.220, "height": 0.110, "quantity": 24, "volume": 0.007623},
    {"biscuit_type": "Anmol Creemos Chocolate", "weight": "79", "length": 0.315, "width": 0.220, "height": 0.110, "quantity": 24, "volume": 0.007623},
    {"biscuit_type": "Darshan’s Creamy Puff Chocolate Flavour", "weight": "85", "length": 0.315, "width": 0.220, "height": 0.205, "quantity": 24, "volume": 0.014207},
    {"biscuit_type": "Darshan’s Creamy Puff Strawberry Flavour", "weight": "85", "length": 0.315, "width": 0.220, "height": 0.205, "quantity": 24, "volume": 0.014207},
    {"biscuit_type": "Darshan’s Creamy Puff Vanilla Flavour", "weight": "85", "length": 0.315, "width": 0.220, "height": 0.205, "quantity": 24, "volume": 0.014207},
    {"biscuit_type": "Darshan’s Creamy Puff Orange Flavour", "weight": "85", "length": 0.315, "width": 0.220, "height": 0.205, "quantity": 24, "volume": 0.014207},
    {"biscuit_type": "Darshan’s Creamy Puff Lemon Flavour", "weight": "85", "length": 0.315, "width": 0.220, "height": 0.205, "quantity": 24, "volume": 0.014207},
    {"biscuit_type": "Anmol Yummy Chocolate", "weight": "50g", "length": 0.430, "width": 0.205, "height": 0.210, "quantity": 100, "volume": 0.018512},
    {"biscuit_type": "Anmol Yummy Orange", "weight": "50g", "length": 0.430, "width": 0.205, "height": 0.210, "quantity": 100, "volume": 0.018512}, 
    {"biscuit_type": "Anmol Yummy Milk", "weight": "50g", "length": 0.430, "width": 0.205, "height": 0.210, "quantity": 100, "volume": 0.018512},
    {"biscuit_type": "Puff Cream Chocolate", "weight": "175", "length": 0.540, "width": 0.355, "height": 0.195, "quantity": 48, "volume": 0.037382},
    {"biscuit_type": "Puff Cream Orange", "weight": "175", "length": 0.540, "width": 0.355, "height": 0.195, "quantity": 48, "volume": 0.037382},
    {"biscuit_type": "Puff Cream Strawberry", "weight": "175", "length": 0.540, "width": 0.355, "height": 0.195, "quantity": 48, "volume": 0.037382},
    {"biscuit_type": "Puff Cream Lemon", "weight": "175", "length": 0.540, "width": 0.355, "height": 0.195, "quantity": 48, "volume": 0.037382},
    {"biscuit_type": "Puff Cream Vanilla", "weight": "175", "length": 0.540, "width": 0.355, "height": 0.195, "quantity": 48, "volume": 0.037382},
    {"biscuit_type": "Anmol Creme Chocolate", "weight": "82.5", "length": 0.305, "width": 0.190, "height": 0.098, "quantity": 24, "volume": 0.005679},
    {"biscuit_type": "Anmol Creme Vanilla", "weight": "82.5", "length": 0.305, "width": 0.190, "height": 0.098, "quantity": 24, "volume": 0.005679},
    {"biscuit_type": "Anmol Creme Orange", "weight": "82.5", "length": 0.305, "width": 0.190, "height": 0.098, "quantity": 24, "volume": 0.005679},
    {"biscuit_type": "Anmol Creme Mango", "weight": "82.5", "length": 0.305, "width": 0.190, "height": 0.098, "quantity": 24, "volume": 0.005679},
    {"biscuit_type": "Anmol Creme Strawberry", "weight": "82.5", "length": 0.305, "width": 0.190, "height": 0.098, "quantity": 24, "volume": 0.005679},
    {"biscuit_type": "Holland Park Bora Bora Vanilla (inner)", "weight": 82, "length": 0.400, "width": 0.150, "height": 0.215, "quantity": 26, "volume": 0.006000},
    {"biscuit_type": "Holland Park Bora Bora Vanilla (outer)", "weight": 82, "length": 0.410, "width": 0.325, "height": 0.215, "quantity": 104, "volume": 0.028649},
    {"biscuit_type": "Holland Park Bora Bora Orange (inner)", "weight": 82, "length": 0.400, "width": 0.150, "height": 0.215, "quantity": 26, "volume": 0.006000},
    {"biscuit_type": "Holland Park Bora Bora Orange (outer)", "weight": 82, "length": 0.410, "width": 0.325, "height": 0.215, "quantity": 104, "volume": 0.028649},
    {"biscuit_type": "Holland Park Bora Bora Strawberry (inner)", "weight": 82, "length": 0.400, "width": 0.150, "height": 0.215, "quantity": 26, "volume": 0.006000},
    {"biscuit_type": "Holland Park Bora Bora Strawberry (outer)", "weight": 82, "length": 0.410, "width": 0.325, "height": 0.215, "quantity": 104, "volume": 0.028649},
    {"biscuit_type": "Holland Park Bora Bora Chocolate (inner)", "weight": 82, "length": 0.400, "width": 0.150, "height": 0.215, "quantity": 26, "volume": 0.006000},
    {"biscuit_type": "Holland Park Bora Bora Chocolate (outer)", "weight": 82, "length": 0.410, "width": 0.325, "height": 0.215, "quantity": 104, "volume": 0.028649},
    {"biscuit_type": "Dahlia Marcos Vanilla", "weight": "30g", "length": 0.420, "width": 0.280, "height": 0.270, "quantity": 288, "volume": 0.031752},
    {"biscuit_type": "Dahlia Marcos Strawberry", "weight": "30g", "length": 0.420, "width": 0.280, "height": 0.270, "quantity": 288, "volume": 0.031752},
    {"biscuit_type": "Dahlia Marcos Lemon", "weight": "30g", "length": 0.420, "width": 0.280, "height": 0.270, "quantity": 288, "volume": 0.031752},
    {"biscuit_type": "Dahlia Marcos Vanilla", "weight": "45g", "length": 0.300, "width": 0.285, "height": 0.267, "quantity": 144, "volume": 0.022829},
    {"biscuit_type": "Naskers Mini Cracker Onion", "weight": "227g", "length": 0.425, "width": 0.285, "height": 0.153, "quantity": 12, "volume": 0.018532},
    {"biscuit_type": "Naskers Mini Cracker Cheese", "weight": "227g", "length": 0.425, "width": 0.285, "height": 0.153, "quantity": 12, "volume": 0.018532},
    {"biscuit_type": "Naskers Mini Cracker Original", "weight": "227g", "length": 0.425, "width": 0.285, "height": 0.153, "quantity": 12, "volume": 0.018532},
    {"biscuit_type": "Naskers Mini Cracker Ranch", "weight": "227g", "length": 0.425, "width": 0.285, "height": 0.153, "quantity": 12, "volume": 0.018532},
    {"biscuit_type": "Export 2in1", "weight": "50g", "length": 0.485, "width": 0.275, "height": 0.275, "quantity": 144, "volume": 0.036278},
    {"biscuit_type": "Export Snack it", "weight": "45g", "length": 0.515, "width": 0.265, "height": 0.270, "quantity": 144, "volume": 0.036273},
    {"biscuit_type": "Happy Otter Soda Crackers", "weight": "250g", "length": 0.375, "width": 0.265, "height": 0.240, "quantity": 20, "volume": 0.025988},
    {"biscuit_type": "Petit Beurre", "weight": "1kg", "length": 0.315, "width": 0.220, "height": 0.130, "quantity": 8, "volume": 0.009009},
    {"biscuit_type": "Yumm Strawberry", "weight": "28g", "length": 0.435, "width": 0.285, "height": 0.130, "quantity": 144, "volume": 0.016117},
    {"biscuit_type": "Yumm Vanilla", "weight": "28g", "length": 0.435, "width": 0.285, "height": 0.130, "quantity": 144, "volume": 0.016117},
    {"biscuit_type": "Yumm Choco-Vanilla", "weight": "28g", "length": 0.435, "width": 0.285, "height": 0.130, "quantity": 144, "volume": 0.016117},
    {"biscuit_type": "Yumm Chocolate", "weight": "28g", "length": 0.435, "width": 0.285, "height": 0.130, "quantity": 144, "volume": 0.016117},
    {"biscuit_type": "Yumm Pineapple", "weight": "28g", "length": 0.435, "width": 0.285, "height": 0.130, "quantity": 144, "volume": 0.016117},
    {"biscuit_type": "Yumm Lemon", "weight": "28g", "length": 0.435, "width": 0.285, "height": 0.130, "quantity": 144, "volume": 0.016117},
    {"biscuit_type": "Bizko Strawberry Flavoured Cream", "weight": "30g", "length": 0.410, "width": 0.280, "height": 0.270, "quantity": 288, "volume": 0.030996},
    {"biscuit_type": "Bizko Vanilla Flavoured Cream", "weight": "30g", "length": 0.410, "width": 0.280, "height": 0.257, "quantity": 144, "volume": 0.021874},
    {"biscuit_type": "Bizko Lemon Flavoured Cream", "weight": "30g", "length": 0.410, "width": 0.280, "height": 0.270, "quantity": 288, "volume": 0.030996},
    {"biscuit_type": "Bizko Vanilla Flavoured Cream", "weight": "45g", "length": 0.300, "width": 0.285, "height": 0.257, "quantity": 144, "volume": 0.021874},
    {"biscuit_type": "Anmol Creemos Strawberry", "weight": "40g", "length": 0.350, "width": 0.240, "height": 0.222, "quantity": 120, "volume": 0.018648},
    {"biscuit_type": "Anmol Creemos Chocolate", "weight": "40g", "length": 0.350, "width": 0.240, "height": 0.222, "quantity": 120, "volume": 0.018648},
    {"biscuit_type": "Anmol Creemos Orange", "weight": "40g", "length": 0.350, "width": 0.240, "height": 0.222, "quantity": 120, "volume": 0.018648},
    {"biscuit_type": "Anmol Creemos Vanilla", "weight": "40g", "length": 0.350, "width": 0.240, "height": 0.222, "quantity": 120, "volume": 0.018648},
    {"biscuit_type": "Anmol Creemos Lemon", "weight": "40g", "length": 0.350, "width": 0.240, "height": 0.222, "quantity": 120, "volume": 0.018648},
    {"biscuit_type": "Love It Strawberry", "weight": "45g", "length": 0.300, "width": 0.285, "height": 0.267, "quantity": 144, "volume": 0.022829},
    {"biscuit_type": "Love It Chocolate", "weight": "45g", "length": 0.300, "width": 0.285, "height": 0.267, "quantity": 144, "volume": 0.022829},
    {"biscuit_type": "Love It Vanilla", "weight": "45g", "length": 0.300, "width": 0.285, "height": 0.267, "quantity": 144, "volume": 0.022829},
    {"biscuit_type": "Bite It - Strawberry", "weight": "30g", "length": 0.225, "width": 0.215, "height": 0.213, "quantity": 100, "volume": 0.010304},
    {"biscuit_type": "Bite It - Chocolate", "weight": "30g", "length": 0.225, "width": 0.215, "height": 0.213, "quantity": 100, "volume": 0.010304},
    {"biscuit_type": "Bite It - Vanilla", "weight": "30g", "length": 0.225, "width": 0.215, "height": 0.213, "quantity": 100, "volume": 0.010304},
    {"biscuit_type": "Snaxi", "weight": "37g", "length": 0.470, "width": 0.275, "height": 0.220, "quantity": 144, "volume": 0.021874},
    {"biscuit_type": "Export Marcos Strawberry", "weight": "180g", "length": 0.470, "width": 0.275, "height": 0.220, "quantity": 24, "volume": 0.028435},
    {"biscuit_type": "Export Marcos Original Vanilla", "weight": "180g", "length": 0.413, "width": 0.310, "height": 0.140, "quantity": 24, "volume": 0.017924},
    {"biscuit_type": "Export Marcos Lemon", "weight": "180g", "length": 0.413, "width": 0.310, "height": 0.140, "quantity": 24, "volume": 0.017924},
    {"biscuit_type": "Export Marcos Chocolate", "weight": "180g", "length": 0.413, "width": 0.310, "height": 0.140, "quantity": 24, "volume": 0.017924},  
    {"biscuit_type": "Export Grab n Go Creemos Strawberry", "weight": "40g", "length": 0.240, "width": 0.235, "height": 0.278, "quantity": 100, "volume": 0.015679},
    {"biscuit_type": "Export Grab n Go Creemos Chocolate", "weight": "40g", "length": 0.240, "width": 0.235, "height": 0.278, "quantity": 100, "volume": 0.015679},
    {"biscuit_type": "Creemos All Flv", "weight": "40g", "length": 0.240, "width": 0.240, "height": 0.278, "quantity": 100, "volume": 0.016013},
    {"biscuit_type": "Export Grab n GoCreemos Orange", "weight": "40g", "length": 0.240, "width": 0.235, "height": 0.278, "quantity": 100, "volume": 0.015679},
    {"biscuit_type": "Export Grab n Go Creemos Vanilla", "weight": "40g", "length": 0.240, "width": 0.235, "height": 0.278, "quantity": 100, "volume": 0.015679},
    {"biscuit_type": "Export Grab n Go Creemos Lemon", "weight": "40g", "length": 0.240, "width": 0.235, "height": 0.278, "quantity": 100, "volume": 0.015679},
    {"biscuit_type": "Yumm Chocolate Round Cream", "weight": "150g", "length": 0.355, "width": 0.266, "height": 0.187, "quantity": 24, "volume": 0.017658},
    {"biscuit_type": "Yumm Strawberry Round Cream", "weight": "150g", "length": 0.355, "width": 0.266, "height": 0.187, "quantity": 24, "volume": 0.017658},
    {"biscuit_type": "Yumm Vanilla Round Cream", "weight": "150g", "length": 0.355, "width": 0.266, "height": 0.187, "quantity": 24, "volume": 0.017658},
    {"biscuit_type": "Yumm Mango Round Cream", "weight": "150g", "length": 0.355, "width": 0.266, "height": 0.187, "quantity": 24, "volume": 0.017658},
    {"biscuit_type": "Yumm Orange Round Cream", "weight": "150g", "length": 0.355, "width": 0.266, "height": 0.187, "quantity": 24, "volume": 0.017658},
    {"biscuit_type": "Yumm Chocolate Round Cream", "weight": "135g", "length": 0.355, "width": 0.245, "height": 0.187, "quantity": 24, "volume": 0.016264},
    {"biscuit_type": "Yumm Chocolate Round Cream", "weight": "135g", "length": 0.355, "width": 0.245, "height": 0.187, "quantity": 24, "volume": 0.016264},
    {"biscuit_type": "Yumm Vanilla Round Cream", "weight": "135g", "length": 0.355, "width": 0.245, "height": 0.187, "quantity": 24, "volume": 0.016264},
    {"biscuit_type": "Yumm Mango Round Cream", "weight": "135g", "length": 0.355, "width": 0.245, "height": 0.187, "quantity": 24, "volume": 0.016264},
    {"biscuit_type": "Yumm Orange Round Cream", "weight": "135g", "length": 0.355, "width": 0.245, "height": 0.187, "quantity": 24, "volume": 0.016264},
    {"biscuit_type": "Puff Creme Chocolate Flavour", "weight": "150g", "length": 0.355, "width": 0.266, "height": 0.195, "quantity": 24, "volume": 0.018414},
    {"biscuit_type": "Puff Creme Strawberry Flavour", "weight": "150g", "length": 0.355, "width": 0.266, "height": 0.195, "quantity": 24, "volume": 0.018414},
    {"biscuit_type": "Puff Creme Vanilla Flavour", "weight": "150g", "length": 0.355, "width": 0.266, "height": 0.195, "quantity": 24, "volume": 0.018414},
    {"biscuit_type": "Puff Creme Lemon Flavour", "weight": "150g", "length": 0.355, "width": 0.266, "height": 0.195, "quantity": 24, "volume": 0.018414},
    {"biscuit_type": "Puff Creme Orange Flavour", "weight": "150g", "length": 0.355, "width": 0.266, "height": 0.195, "quantity": 24, "volume": 0.018414},
    {"biscuit_type": "Creembos Premium Puff Cream Chocolate Cream", "weight": "118g", "length": 0.491, "width": 0.345, "height": 0.185, "quantity": 48, "volume": 0.031338},
    {"biscuit_type": "Creembos Premium Puff Cream Strawberry Cream", "weight": "118g", "length": 0.491, "width": 0.345, "height": 0.185, "quantity": 48, "volume": 0.031338},
    {"biscuit_type": "Creembos Premium Puff Cream Vanilla Cream", "weight": "118g", "length": 0.491, "width": 0.345, "height": 0.185, "quantity": 48, "volume": 0.031338},
    {"biscuit_type": "Creembos Premium Puff Cream Mango Cream", "weight": "118g", "length": 0.491, "width": 0.345, "height": 0.185, "quantity": 48, "volume": 0.031338},
    {"biscuit_type": "Creembos Premium Puff Cream Orange Cream", "weight": "118g", "length": 0.491, "width": 0.345, "height": 0.185, "quantity": 48, "volume": 0.031338},
    {"biscuit_type": "Anmol Creemos Strawberry", "weight": "40g", "length": 0.340, "width": 0.235, "height": 0.165, "quantity": 90, "volume": 0.013184},
    {"biscuit_type": "Anmol Creemos Chocolate", "weight": "40g", "length": 0.340, "width": 0.235, "height": 0.165, "quantity": 90, "volume": 0.013184},
    {"biscuit_type": "Anmol Creemos Orange", "weight": "40g", "length": 0.340, "width": 0.235, "height": 0.165, "quantity": 90, "volume": 0.013184},
    {"biscuit_type": "Anmol Creemos Vanilla", "weight": "40g", "length": 0.340, "width": 0.235, "height": 0.165, "quantity": 90, "volume": 0.013184},
    {"biscuit_type": "Anmol Creemos Lemon", "weight": "40g", "length": 0.340, "width": 0.235, "height": 0.165, "quantity": 90, "volume": 0.013184},
    {"biscuit_type": "Marie Plus", "weight": "100g", "length": 0.365, "width": 0.280, "height": 0.245, "quantity": 48, "volume": 0.025039},
    {"biscuit_type": "2in1", "weight": "45g", "length": 0.445, "width": 0.250, "height": 0.225, "quantity": 100, "volume": 0.025031},
    {"biscuit_type": "Holland Park Bora Bora Vanilla", "weight": "90g", "length": 0.315, "width": 0.190, "height": 0.098, "quantity": 24, "volume": 0.005861},
    {"biscuit_type": "Holland Park Bora Bora Orange", "weight": "90g", "length": 0.315, "width": 0.190, "height": 0.098, "quantity": 24, "volume": 0.005865},
    {"biscuit_type": "Holland Park Bora Bora Strawberry", "weight": "90g", "length": 0.315, "width": 0.190, "height": 0.098, "quantity": 24, "volume": 0.005865},
    {"biscuit_type": "Holland Park Bora Bora Chocolate", "weight": "90g", "length": 0.315, "width": 0.190, "height": 0.098, "quantity": 24, "volume": 0.005865},
    {"biscuit_type": "Anmol Creemos Strawberry", "weight": "40g", "length": 0.278, "width": 0.235, "height": 0.112, "quantity": 48, "volume": 0.007317},
    {"biscuit_type": "Anmol Creemos Chocolate", "weight": "40g", "length": 0.278, "width": 0.235, "height": 0.112, "quantity": 48, "volume": 0.007317},
    {"biscuit_type": "Anmol Creemos Vanilla", "weight": "40g", "length": 0.278, "width": 0.235, "height": 0.112, "quantity": 48, "volume": 0.007317},
    {"biscuit_type": "Anmol Creemos Lemon", "weight": "40g", "length": 0.278, "width": 0.235, "height": 0.112, "quantity": 48, "volume": 0.007317},
    {"biscuit_type": "Anmol Creemos Strawberry", "weight": "38.5g", "length": 0.340, "width": 0.235, "height": 0.222, "quantity": 120, "volume": 0.017738},
    {"biscuit_type": "Anmol Creemos Chocolate", "weight": "38.5g", "length": 0.340, "width": 0.235, "height": 0.222, "quantity": 120, "volume": 0.017738},
    {"biscuit_type": "Anmol Creemos Orange", "weight": "38.5g", "length": 0.340, "width": 0.235, "height": 0.222, "quantity": 120, "volume": 0.017738},
    {"biscuit_type": "Anmol Creemos Vanilla", "weight": "38.5g", "length": 0.340, "width": 0.235, "height": 0.222, "quantity": 120, "volume": 0.017738},
    {"biscuit_type": "Anmol Creemos Lemon", "weight": "38.5g", "length": 0.340, "width": 0.235, "height": 0.222, "quantity": 120, "volume": 0.017738},
    {"biscuit_type": "Anmol Petit Buerre", "weight": "80g", "length": 0.270, "width": 0.228, "height": 0.220, "quantity": 48, "volume": 0.013543},
    {"biscuit_type": "Anmol Petit Buerre", "weight": "80g", "length": 0.465, "width": 0.218, "height": 0.272, "quantity": 100, "volume": 0.027573},
    {"biscuit_type": "Anmol Butter Bake", "weight": "40g", "length": 0.370, "width": 0.260, "height": 0.215, "quantity": 120, "volume": 0.020683},
    {"biscuit_type": "Anmol Butter Bake", "weight": "40g", "length": 0.450, "width": 0.237, "height": 0.255, "quantity": 120, "volume": 0.027196},
    {"biscuit_type": "Snaco", "weight": "40g", "length": 0.450, "width": 0.237, "height": 0.255, "quantity": 120, "volume": 0.025097},    
    {"biscuit_type": "Butter Cookies tin", "weight": "340g", "length": 0.390, "width": 0.390, "height": 0.165, "quantity": 12, "volume": 0.025097},
    {"biscuit_type": "Dahlia Marcos Vanilla", "weight": "30g", "length": 0.280, "width": 0.210, "height": 0.275, "quantity": 144, "volume": 0.016170},
    {"biscuit_type": "Dahlia Marcos Strawberry", "weight": "30g", "length": 0.280, "width": 0.210, "height": 0.275, "quantity": 144, "volume": 0.016170},
    {"biscuit_type": "Dahlia Marcos Lemon", "weight": "30g", "length": 0.280, "width": 0.210, "height": 0.275, "quantity": 144, "volume": 0.016170},
    {"biscuit_type": "Bite it - Strawberry", "weight": "30g", "length": 0.413, "width": 0.272, "height": 0.260, "quantity": 288, "volume": 0.029207},
    {"biscuit_type": "Bite it - Chocolate", "weight": "30g", "length": 0.413, "width": 0.272, "height": 0.260, "quantity": 288, "volume": 0.029207},
    {"biscuit_type": "Bite it - Vanilla", "weight": "30g", "length": 0.413, "width": 0.272, "height": 0.260, "quantity": 288, "volume": 0.029207},
    {"biscuit_type": "Butter Bake (Export)", "weight": "45g", "length": 0.275, "width": 0.178, "height": 0.192, "quantity": 48, "volume": 0.009398},
    {"biscuit_type": "Rexxa Creamchop Chocolate", "weight": "135g", "length": 0.495, "width": 0.355, "height": 0.195, "quantity": 48, "volume": 0.034266},
    {"biscuit_type": "Rexxa Creamchop Orange", "weight": "150g", "length": 0.495, "width": 0.355, "height": 0.195, "quantity": 48, "volume": 0.034266},
    {"biscuit_type": "Rexxa Creamchop Strawberry", "weight": "150g", "length": 0.495, "width": 0.355, "height": 0.195, "quantity": 48, "volume": 0.034266},
    {"biscuit_type": "Rexxa Creamchop Mango", "weight": "150g", "length": 0.495, "width": 0.355, "height": 0.195, "quantity": 48, "volume": 0.034266},
    {"biscuit_type": "Rexxa Creamchop Vanilla", "weight": "150g", "length": 0.495, "width": 0.355, "height": 0.195, "quantity": 48, "volume": 0.034266},
    {"biscuit_type": "Anmol Puff Cream Chocolate", "weight": "40g", "length": 0.240, "width": 0.240, "height": 0.278, "quantity": 100, "volume": 0.016013},
    {"biscuit_type": "Anmol Puff Cream Strawberry", "weight": "40g", "length": 0.240, "width": 0.240, "height": 0.278, "quantity": 100, "volume": 0.016013},
    {"biscuit_type": "Anmol Puff Cream Orange", "weight": "40g", "length": 0.240, "width": 0.240, "height": 0.278, "quantity": 100, "volume": 0.016013},
    {"biscuit_type": "Anmol Puff Cream Vanilla", "weight": "40g", "length": 0.240, "width": 0.240, "height": 0.278, "quantity": 100, "volume": 0.016013},
    {"biscuit_type": "Anmol Puff Cream Lemon", "weight": "40g", "length": 0.240, "width": 0.240, "height": 0.278, "quantity": 100, "volume": 0.016013},
    {"biscuit_type": "Export 2in1", "weight": "50g", "length": 0.270, "width": 0.250, "height": 0.185, "quantity": 48, "volume": 0.012488},
    {"biscuit_type": "Export Snack it", "weight": "42g", "length": 0.270, "width": 0.245, "height": 0.185, "quantity": 48, "volume": 0.012238},
    {"biscuit_type": "Creemos Chocolate Inner", "weight": "79g", "length": 0.260, "width": 0.157, "height": 0.180, "quantity": 25, "volume": 0.007348},
    {"biscuit_type": "Creemos Chocolate Poly Master", "weight": "79g", "length": 0.495, "width": 0.270, "height": 0.380, "quantity": 150, "volume": 0.050787},
    {"biscuit_type": "Creemos Strawberry Inner", "weight": "79g", "length": 0.260, "width": 0.157, "height": 0.180, "quantity": 25, "volume": 0.007348},
    {"biscuit_type": "Creemos Strawberry Poly Master", "weight": "79g", "length": 0.495, "width": 0.270, "height": 0.380, "quantity": 150, "volume": 0.050787},
    {"biscuit_type": "Creemos Vanilla Inner", "weight": "79g", "length": 0.260, "width": 0.157, "height": 0.180, "quantity": 25, "volume": 0.007348},
    {"biscuit_type": "Creemos Vanilla Poly Master", "weight": "79g", "length": 0.495, "width": 0.270, "height": 0.380, "quantity": 150, "volume": 0.050787},
    {"biscuit_type": "Creemos Orange Inner", "weight": "79g", "length": 0.260, "width": 0.157, "height": 0.180, "quantity": 25, "volume": 0.007348},
    {"biscuit_type": "Creemos Orange Poly Master", "weight": "79g", "length": 0.495, "width": 0.270, "height": 0.380, "quantity": 150, "volume": 0.050787},
    {"biscuit_type": "Creemos Lemon Inner", "weight": "79g", "length": 0.260, "width": 0.157, "height": 0.180, "quantity": 25, "volume": 0.007348},
    {"biscuit_type": "Creemos Lemon Poly Master", "weight": "79g", "length": 0.495, "width": 0.270, "height": 0.380, "quantity": 150, "volume": 0.050787},
    {"biscuit_type": "Balaxi Yap Yumm Chocolate Cream", "weight": "50g", "length": 0.430, "width": 0.205, "height": 0.205, "quantity": 100, "volume": 0.018071},
    {"biscuit_type": "Balaxi Yap Yumm Orange Cream", "weight": "50g", "length": 0.430, "width": 0.205, "height": 0.205, "quantity": 100, "volume": 0.018071},
    {"biscuit_type": "Balaxi Yap Yumm Strawberry Cream", "weight": "50g", "length": 0.430, "width": 0.205, "height": 0.205, "quantity": 100, "volume": 0.018071},
    {"biscuit_type": "Balaxi Yap Creemos", "weight": "52g", "length": 0.422, "width": 0.270, "height": 0.185, "quantity": 100, "volume": 0.021079},
    {"biscuit_type": "Export Marie Plus", "weight": "50g", "length": 0.425, "width": 0.260, "height": 0.260, "quantity": 100, "volume": 0.028730},
    {"biscuit_type": "Bizko Strawberry", "weight": "30g", "length": 0.280, "width": 0.210, "height": 0.268, "quantity": 144, "volume": 0.015758},
    {"biscuit_type": "Bizko Vanilla", "weight": "30g", "length": 0.280, "width": 0.210, "height": 0.268, "quantity": 144, "volume": 0.015758},
    {"biscuit_type": "Bizko Lemon", "weight": "30g", "length": 0.280, "width": 0.210, "height": 0.268, "quantity": 144, "volume": 0.015758},
    {"biscuit_type": "Export Snack It", "weight": "284g", "length": 0.315, "width": 0.315, "height": 0.220, "quantity": 12, "volume": 0.021830},
    {"biscuit_type": "Export Grab n Go Creemos Strawberry", "weight": "37g", "length": 0.240, "width": 0.240, "height": 0.268, "quantity": 100, "volume": 0.015437},
    {"biscuit_type": "Export Grab n Go Creemos Chocolate", "weight": "37g", "length": 0.240, "width": 0.240, "height": 0.268, "quantity": 100, "volume": 0.015437},
    {"biscuit_type": "Export Grab n Go Creemos Mango", "weight": "37g", "length": 0.240, "width": 0.240, "height": 0.268, "quantity": 100, "volume": 0.015437},
    {"biscuit_type": "Export Grab n Go Creemos Lemon", "weight": "37g", "length": 0.240, "width": 0.240, "height": 0.268, "quantity": 100, "volume": 0.015437},
    {"biscuit_type": "Holland Park Bonus(Milk Shortcake)", "weight": "70g", "length": 0.295, "width": 0.230, "height": 0.193, "quantity": 48, "volume": 0.013095},
    {"biscuit_type": "Anmol Creemos Puff Cream Chocolate", "weight": "36g", "length": 0.278, "width": 0.235, "height": 0.112, "quantity": 48, "volume": 0.007317},
    {"biscuit_type": "Anmol Creemos Puff Cream Strawberry", "weight": "36g", "length": 0.278, "width": 0.235, "height": 0.112, "quantity": 48, "volume": 0.007317},
    {"biscuit_type": "Anmol Creemos Puff Cream Orange", "weight": "36g", "length": 0.278, "width": 0.235, "height": 0.112, "quantity": 48, "volume": 0.007317},
    {"biscuit_type": "Anmol Creemos Puff Cream Vanilla", "weight": "36g", "length": 0.278, "width": 0.235, "height": 0.112, "quantity": 48, "volume": 0.007317},
    {"biscuit_type": "Anmol Creemos Puff Cream Lemon", "weight": "36g", "length": 0.278, "width": 0.235, "height": 0.112, "quantity": 48, "volume": 0.007317},
    {"biscuit_type": "Anmol Milkbis Milk Shortcake", "weight": "65g", "length": 0.295, "width": 0.230, "height": 0.097, "quantity": 24, "volume": 0.006581},
    {"biscuit_type": "Holland Park Sonrier Cream All Flavour", "weight": "150g", "length": 0.355, "width": 0.266, "height": 0.187, "quantity": 24, "volume": 0.017658},
    {"biscuit_type": "Marco", "weight": "30g", "length": 0.285, "width": 0.210, "height": 0.222, "quantity": 120, "volume": 0.013287},
    {"biscuit_type": "Marco", "weight": "45g", "length": 0.300, "width": 0.230, "height": 0.213, "quantity": 100, "volume": 0.014697},
    {"biscuit_type": "Holland Park Bora Bora Mango", "weight": "45g", "length": 0.360, "width": 0.248, "height": 0.155, "quantity": 100, "volume": 0.013838},
    {"biscuit_type": "Holland Park Bora Bora Mix Fruit", "weight": "45g", "length": 0.360, "width": 0.248, "height": 0.155, "quantity": 100, "volume": 0.013838},
    {"biscuit_type": "Mon Amour Delicious Cookies Chocolate", "weight": "290g", "length": 0.440, "width": 0.263, "height": 0.285, "quantity": 24, "volume": 0.032980},
    {"biscuit_type": "Mon Amour Delicious Cookies Vanilla", "weight": "290g", "length": 0.440, "width": 0.263, "height": 0.285, "quantity": 24, "volume": 0.032980},
    {"biscuit_type": "Mon Amour Delicious Cookies Strawberry", "weight": "290g", "length": 0.440, "width": 0.263, "height": 0.285, "quantity": 24, "volume": 0.032980},
    {"biscuit_type": "Mon Amour Delicious Cookies Orange", "weight": "290g", "length": 0.440, "width": 0.263, "height": 0.285, "quantity": 24, "volume": 0.032980},
    {"biscuit_type": "Creemos Chocolate Cream", "weight": "71g", "length": 0.315, "width": 0.220, "height": 0.110, "quantity": 24, "volume": 0.007623},
    {"biscuit_type": "Creemos Strawberry Cream", "weight": "71g", "length": 0.315, "width": 0.220, "height": 0.110, "quantity": 24, "volume": 0.007623},
    {"biscuit_type": "Creemos Orange Cream", "weight": "71g", "length": 0.315, "width": 0.220, "height": 0.110, "quantity": 24, "volume": 0.007623},
    {"biscuit_type": "Creemos Vanilla Cream", "weight": "71g", "length": 0.315, "width": 0.220, "height": 0.110, "quantity": 24, "volume": 0.007623},
    {"biscuit_type": "Creemos Lemon Cream", "weight": "71g", "length": 0.315, "width": 0.220, "height": 0.110, "quantity": 24, "volume": 0.007623},
    {"biscuit_type": "Creemos Chocolate Cream", "weight": "36g", "length": 0.278, "width": 0.235, "height": 0.222, "quantity": 96, "volume": 0.014503},
    {"biscuit_type": "Creemos Strawberry Cream", "weight": "36g", "length": 0.278, "width": 0.235, "height": 0.222, "quantity": 96, "volume": 0.014503},
    {"biscuit_type": "Creemos Orange Cream", "weight": "36g", "length": 0.278, "width": 0.235, "height": 0.222, "quantity": 96, "volume": 0.014503},
    {"biscuit_type": "Creemos Vanilla Cream", "weight": "36g", "length": 0.278, "width": 0.235, "height": 0.222, "quantity": 96, "volume": 0.014503},
    {"biscuit_type": "Creemos Lemon Cream", "weight": "36g", "length": 0.278, "width": 0.235, "height": 0.222, "quantity": 96, "volume": 0.014503},
    {"biscuit_type": "Creemos Chocolate Cream", "weight": "36g", "length": 0.240, "width": 0.240, "height": 0.268, "quantity": 100, "volume": 0.015437},
    {"biscuit_type": "Creemos Strawberry Cream", "weight": "36g", "length": 0.240, "width": 0.240, "height": 0.268, "quantity": 100, "volume": 0.015437},
    {"biscuit_type": "Creemos Orange Cream", "weight": "36g", "length": 0.240, "width": 0.240, "height": 0.268, "quantity": 100, "volume": 0.015437},
    {"biscuit_type": "Creemos Vanilla Cream", "weight": "36g", "length": 0.240, "width": 0.240, "height": 0.268, "quantity": 100, "volume": 0.015437},
    {"biscuit_type": "Creemos Lemon Cream", "weight": "36g", "length": 0.240, "width": 0.240, "height": 0.268, "quantity": 100, "volume": 0.015437},
    {"biscuit_type": "Alyom Sandwich Biscuits (Abu Walad)", "weight": "90g", "length": 0.570, "width": 0.395, "height": 0.108, "quantity": 48, "volume": 0.024316},
    {"biscuit_type": "Rexxa Creamchop Chocolate", "weight": "120g", "length": 0.491, "width": 0.345, "height": 0.185, "quantity": 48, "volume": 0.031338},
    {"biscuit_type": "Rexxa Creamchop Orange", "weight": "120g", "length": 0.491, "width": 0.345, "height": 0.185, "quantity": 48, "volume": 0.031338},
    {"biscuit_type": "Rexxa Creamchop Strawberry", "weight": "120g", "length": 0.491, "width": 0.345, "height": 0.185, "quantity": 48, "volume": 0.031338},
    {"biscuit_type": "Rexxa Creamchop Mango", "weight": "120g", "length": 0.491, "width": 0.345, "height": 0.185, "quantity": 48, "volume": 0.031338},
    {"biscuit_type": "Rexxa Creamchop Vanilla", "weight": "120g", "length": 0.491, "width": 0.345, "height": 0.185, "quantity": 48, "volume": 0.031338},
    {"biscuit_type": "Classy Chocolate Cream", "weight": "150g", "length": 0.540, "width": 0.355, "height": 0.195, "quantity": 48, "volume": 0.037382},
    {"biscuit_type": "Classy Strawberry Cream", "weight": "150g", "length": 0.540, "width": 0.355, "height": 0.195, "quantity": 48, "volume": 0.037382},
    {"biscuit_type": "Classy Orange Cream", "weight": "150g", "length": 0.540, "width": 0.355, "height": 0.195, "quantity": 48, "volume": 0.037382},
    {"biscuit_type": "Classy Mango Cream", "weight": "150g", "length": 0.540, "width": 0.355, "height": 0.195, "quantity": 48, "volume": 0.037382},
    {"biscuit_type": "Classy Vanilla Cream", "weight": "150g", "length": 0.540, "width": 0.355, "height": 0.195, "quantity": 48, "volume": 0.037382},
    {"biscuit_type": "Neskers Premium Tea Biscuits (Inner)", "weight": "100g", "length": 0.248, "width": 0.145, "height": 0.136, "quantity": 12, "volume": 0.004891},
    {"biscuit_type": "Neskers Premium Tea Biscuits (Master)", "weight": "100g", "length": 0.615, "width": 0.258, "height": 0.285, "quantity": 96, "volume": 0.045221},
    {"biscuit_type": "Yap Snaxi", "weight": "35g", "length": 0.265, "width": 0.210, "height": 0.175, "quantity": 48, "volume": 0.009739},
    {"biscuit_type": "Balaxi Yap Yumm Orange Cream", "weight": "50g", "length": 0.430, "width": 0.205, "height": 0.205, "quantity": 100, "volume": 0.018071},
    {"biscuit_type": "Balaxi Yap Yumm Strawberry Cream", "weight": "50g", "length": 0.430, "width": 0.205, "height": 0.205, "quantity": 100, "volume": 0.018071},
    {"biscuit_type": "Holland Park Bonus (Milk Shortcake)", "weight": "65g", "length": 0.295, "width": 0.230, "height": 0.097, "quantity": 24, "volume": 0.006581},
    {"biscuit_type": "Holland Park Bora Bora Strawberry", "weight": "82g", "length": 0.310, "width": 0.300, "height": 0.250, "quantity": 96, "volume": 0.023250},
    {"biscuit_type": "Holland Park Bora Bora Chocolate", "weight": "82g", "length": 0.310, "width": 0.300, "height": 0.250, "quantity": 96, "volume": 0.023250},
    {"biscuit_type": "Holland Park Bora Bora Orange", "weight": "82g", "length": 0.310, "width": 0.300, "height": 0.250, "quantity": 96, "volume": 0.023250},
    {"biscuit_type": "Holland Park Bora Bora Vanilla", "weight": "82g", "length": 0.310, "width": 0.300, "height": 0.250, "quantity": 96, "volume": 0.023250},
    {"biscuit_type": "Holland Park Bora Bora (12X2 orientation) Inner", "weight": "82g", "length": 0.370, "width": 0.150, "height": 0.100, "quantity": 24, "volume": 0.005550},
    {"biscuit_type": "Holland Park Bora Bora (12X2 orientation) Master", "weight": "82g", "length": 0.480, "width": 0.380, "height": 0.220, "quantity": 144, "volume": 0.040128},
    {"biscuit_type": "Holland Park Sonreir Cream All Flvr", "weight": "135g", "length": 0.540, "width": 0.345, "height": 0.185, "quantity": 48, "volume": 0.034466},
    {"biscuit_type": "Creme All Flvr", "weight": "40g", "length": 0.370, "width": 0.248, "height": 0.155, "quantity": 100, "volume": 0.014223},
    {"biscuit_type": "Creme All Flvr", "weight": "80g", "length": 0.305, "width": 0.190, "height": 0.098, "quantity": 24, "volume": 0.005679},
    {"biscuit_type": "Holland Park Bonus (Milk Shortcake)", "weight": "65g", "length": 0.295, "width": 0.230, "height": 0.193, "quantity": 48, "volume": 0.013095},
    {"biscuit_type": "Holland Park Mini Cracker Onion", "weight": "227g", "length": 0.425, "width": 0.285, "height": 0.153, "quantity": 12, "volume": 0.018532},
    {"biscuit_type": "Holland Park Mini Cracker Cheese", "weight": "227g", "length": 0.425, "width": 0.285, "height": 0.153, "quantity": 12, "volume": 0.018532},
    {"biscuit_type": "Holland Park Mini Cracker Orginal", "weight": "227g", "length": 0.425, "width": 0.285, "height": 0.153, "quantity": 12, "volume": 0.018532},
    {"biscuit_type": "Petit Beurre", "weight": "80g", "length": 0.270, "width": 0.240, "height": 0.110, "quantity": 24, "volume": 0.007128},
    {"biscuit_type": "Sona Marco (All Flavor)", "weight": "180g", "length": 0.413, "width": 0.310, "height": 0.140, "quantity": 24, "volume": 0.017924},
    {"biscuit_type": "Yap Guloso", "weight": "45g", "length": 0.310, "width": 0.190, "height": 0.125, "quantity": 48, "volume": 0.007363},
    {"biscuit_type": "Butter Bake", "weight": "40", "length": 0.275, "width": 0.178, "height": 0.18, "quantity": 48, "volume": 0.008811},
    {"biscuit_type": "Butter Bake", "weight": "45", "length": 0.27, "width": 0.18, "height": 0.255, "quantity": 72, "volume": 0.012393},
    {"biscuit_type": "Yap Yumm Chocolate", "weight": "42g", "length": 0.43, "width": 0.18, "height": 0.205, "quantity": 100, "volume": 0.015867},
    {"biscuit_type": "Yummy Chocolate Export", "weight": "35g", "length": 0.355, "width": 0.215, "height": 0.245, "quantity": 120, "volume": 0.018700},
    {"biscuit_type": "Yummy Orange Export", "weight": "35g", "length": 0.355, "width": 0.215, "height": 0.245, "quantity": 120, "volume": 0.018700},
    {"biscuit_type": "Yummy Milk Export", "weight": "35g", "length": 0.355, "width": 0.215, "height": 0.245, "quantity": 120, "volume": 0.018700},
    {"biscuit_type": "Export Grab n Go Creemos Chocolate", "weight": "37g", "length": 0.43, "width": 0.245, "height": 0.215, "quantity": 144, "volume": 0.022650},
    {"biscuit_type": "Holland Park Bora Bora Strawberry Inner", "weight": "78g", "length": 0.253, "width": 0.153, "height": 0.148, "quantity": 24, "volume": 0.005729},
    {"biscuit_type": "Holland Park Bora Bora Orange Inner", "weight": "78g", "length": 0.253, "width": 0.153, "height": 0.148, "quantity": 24, "volume": 0.005729},
    {"biscuit_type": "Holland Park Bora Bora Vanilla Inner", "weight": "78g", "length": 0.253, "width": 0.153, "height": 0.148, "quantity": 24, "volume": 0.005729},
    {"biscuit_type": "Holland Park Bora Bora Chocolate Inner", "weight": "78g", "length": 0.253, "width": 0.153, "height": 0.148, "quantity": 24, "volume": 0.005729},
    {"biscuit_type": "Creemos", "weight": "42g", "length": 0.32, "width": 0.265, "height": 0.185, "quantity": 100, "volume": 0.015688},
    {"biscuit_type": "Yummy Cream All Flavours", "weight": "35g", "length": 0.34, "width": 0.266, "height": 0.165, "quantity": 96, "volume": 0.014923},
    {"biscuit_type": "Yummy Cream All Flavours", "weight": "70g", "length": 0.36, "width": 0.305, "height": 0.278, "quantity": 96, "volume": 0.030524},
    {"biscuit_type": "Yummy Cream All Flavours", "weight": "70g", "length": 0.295, "width": 0.165, "height": 0.125, "quantity": 24, "volume": 0.006084},
    {"biscuit_type": "Marie Plus", "weight": "52g", "length": 0.405, "width": 0.32, "height": 0.292, "quantity": 100, "volume": 0.037843},
    {"biscuit_type": "Anmol Creme (Inner)", "weight": "78g", "length": 0.38, "width": 0.155, "height": 0.100, "quantity": 24, "volume": 0.005890},
    {"biscuit_type": "Anmol Creme (Master Carton)", "weight": "78g", "length": 0.41, "width": 0.325, "height": 0.215, "quantity": 96, "volume": 0.028649},
    {"biscuit_type": "Anmol Creemos (Inner)", "weight": "78g", "length": 0.22, "width": 0.170, "height": 0.210, "quantity": 96, "volume": 0.007854},
    {"biscuit_type": "Anmol Creemos (Master Carton)", "weight": "78g", "length": 0.46, "width": 0.365, "height": 0.220, "quantity": 96, "volume": 0.036938},
    {"biscuit_type": "2 IN 1 (Inner)", "weight": "72g", "length": 0.30, "width": 0.255, "height": 0.170, "quantity": 24, "volume": 0.013005},
    {"biscuit_type": "2 IN 1 (Master Carton)", "weight": "72g", "length": 0.538, "width": 0.318, "height": 0.360, "quantity": 96, "volume": 0.061590},
    {"biscuit_type": "Marie Plus", "weight": "92g", "length": 0.35, "width": 0.335, "height": 0.235, "quantity": 48, "volume": 0.027554},
    {"biscuit_type": "Goober Cream", "weight": "26g", "length": 0.360, "width": 0.220, "height": 0.290, "quantity": 18, "volume": 0.022968},
    {"biscuit_type": "Goober Cream", "weight": "30g", "length": 0.360, "width": 0.220, "height": 0.290, "quantity": 18, "volume": 0.022968},
    {"biscuit_type": "Marie Plus (Inner)", "weight": "72g", "length": 0.230, "width": 0.145, "height": 0.118, "quantity": 8, "volume": 0.003935},
    {"biscuit_type": "Marie Plus (Master Carton)", "weight": "72g", "length": 0.460, "width": 0.245, "height": 0.260, "quantity": 48, "volume": 0.029302},
    {"biscuit_type": "Rexxa Cream Chop All Flavours", "weight": "135g", "length": 0.495, "width": 0.355, "height": 0.195, "quantity": 48, "volume": 0.034266},
    {"biscuit_type": "Classy Cream All Flavours", "weight": "135g", "length": 0.540, "width": 0.355, "height": 0.195, "quantity": 48, "volume": 0.037382},
    {"biscuit_type": "Yap Doce E Sal Biscuits", "weight": "35g", "length": 0.255, "width": 0.220, "height": 0.175, "quantity": 48, "volume": 0.009818},
    {"biscuit_type": "Creemos Orange", "weight": "24g", "length": 0.422, "width": 0.260, "height": 0.160, "quantity": 144, "volume": 0.017555},
    {"biscuit_type": "Creemos Vanilla", "weight": "24g", "length": 0.422, "width": 0.260, "height": 0.160, "quantity": 144, "volume": 0.017555},
    {"biscuit_type": "Creemos Strawberry", "weight": "24g", "length": 0.422, "width": 0.260, "height": 0.160, "quantity": 144, "volume": 0.017555},
    {"biscuit_type": "Creemos Chocolate", "weight": "24g", "length": 0.422, "width": 0.260, "height": 0.160, "quantity": 144, "volume": 0.017555},
    {"biscuit_type": "Creemos Lemon", "weight": "24g", "length": 0.422, "width": 0.260, "height": 0.160, "quantity": 144, "volume": 0.017555},
    {"biscuit_type": "Creme Chocolate Flvr", "weight": "78g", "length": 0.380, "width": 0.155, "height": 0.094, "quantity": 24, "volume": 0.005537},
    {"biscuit_type": "Creme Strawberry Flvr", "weight": "78g", "length": 0.380, "width": 0.155, "height": 0.094, "quantity": 24, "volume": 0.005537},
    {"biscuit_type": "Creme Orange Flvr", "weight": "78g", "length": 0.380, "width": 0.155, "height": 0.094, "quantity": 24, "volume": 0.005537},
    {"biscuit_type": "Creme Vanilla Flvr", "weight": "78g", "length": 0.380, "width": 0.155, "height": 0.094, "quantity": 24, "volume": 0.005537},
    {"biscuit_type": "Creme Mango Flvr", "weight": "78g", "length": 0.380, "width": 0.155, "height": 0.094, "quantity": 24, "volume": 0.005537},
    {"biscuit_type": "Crème All Flavour", "weight": "82.5g", "length": 0.253, "width": 0.153, "height": 0.148, "quantity": 24, "volume": 0.005729},
    {"biscuit_type": "Yumm Chocolate (Small ATC)", "weight": "135g", "length": 0.495, "width": 0.355, "height": 0.182, "quantity": 48, "volume": 0.031982},
    {"biscuit_type": "Yumm Orange (Small ATC)", "weight": "135g", "length": 0.495, "width": 0.355, "height": 0.182, "quantity": 48, "volume": 0.031982},
    {"biscuit_type": "Yumm Vanilla (Small ATC)", "weight": "135g", "length": 0.495, "width": 0.355, "height": 0.182, "quantity": 48, "volume": 0.031982},
    {"biscuit_type": "Yumm Mango (Small ATC)", "weight": "135g", "length": 0.495, "width": 0.355, "height": 0.182, "quantity": 48, "volume": 0.031982},
    {"biscuit_type": "Yumm Strawberry (Small ATC)", "weight": "135g", "length": 0.495, "width": 0.355, "height": 0.182, "quantity": 48, "volume": 0.031982},
    {"biscuit_type": "Yap Yumm Orange", "weight": "42g", "length": 0.265, "width": 0.180, "height": 0.165, "quantity": 48, "volume": 0.007871},
    {"biscuit_type": "Yap Yumm Strawberry", "weight": "42g", "length": 0.265, "width": 0.180, "height": 0.165, "quantity": 48, "volume": 0.007871},
    {"biscuit_type": "Yap Yumm Chocolate", "weight": "42g", "length": 0.265, "width": 0.180, "height": 0.165, "quantity": 48, "volume": 0.007871},
    {"biscuit_type": "Creemos", "weight": "70g", "length": 0.305, "width": 0.260, "height": 0.285, "quantity": 96, "volume": 0.022601},
    {"biscuit_type": "Snack it", "weight": "30g", "length": 0.470, "width": 0.270, "height": 0.170, "quantity": 96, "volume": 0.021573},
    {"biscuit_type": "Crème", "weight": "65g", "length": 0.285, "width": 0.245, "height": 0.270, "quantity": 96, "volume": 0.018853},
    {"biscuit_type": "Yumm Cream", "weight": "128g", "length": 0.380, "width": 0.270, "height": 0.278, "quantity": 48, "volume": 0.028523},
    {"biscuit_type": "Hit n Run Fab Cream", "weight": "70g", "length": 0.255, "width": 0.210, "height": 0.170, "quantity": 48, "volume": 0.009104},
    {"biscuit_type": "Creemos", "weight": "79g", "length": 0.315, "width": 0.220, "height": 0.205, "quantity": 48, "volume": 0.014207},
    {"biscuit_type": "LOVE IT", "weight": "45g", "length": 0.300, "width": 0.240, "height": 0.225, "quantity": 100, "volume": 0.016200},
    {"biscuit_type": "Bizko Vanilla", "weight": "45g", "length": 0.340, "width": 0.285, "height": 0.090, "quantity": 48, "volume": 0.008721},
    {"biscuit_type": "Yumm Chocolate Cream", "weight": "28g", "length": 0.285, "width": 0.225, "height": 0.175, "quantity": 96, "volume": 0.011222},
    {"biscuit_type": "Marie plus", "weight": "92g", "length": 0.365, "width": 0.355, "height": 0.295, "quantity": 60, "volume": 0.038225},
    {"biscuit_type": "Creemos Puff it", "weight": "63g", "length": 0.305, "width": 0.245, "height": 0.080, "quantity": 24, "volume": 0.005978},
    {"biscuit_type": "Snack it", "weight": "32g", "length": 0.295, "width": 0.245, "height": 0.180, "quantity": 48, "volume": 0.013010},
    {"biscuit_type": "2 in 1", "weight": "36g", "length": 0.280, "width": 0.260, "height": 0.180, "quantity": 48, "volume": 0.013104},
    {"biscuit_type": "Cefa Cremo joy Chocolate", "weight": "40g", "length": 0.240, "width": 0.240, "height": 0.278, "quantity": 100, "volume": 0.016013},
    {"biscuit_type": "Cefa Cremo joy Orange", "weight": "40g", "length": 0.240, "width": 0.240, "height": 0.278, "quantity": 100, "volume": 0.016013},
    {"biscuit_type": "Cefa Cremo joy Vanilla", "weight": "40g", "length": 0.240, "width": 0.240, "height": 0.278, "quantity": 100, "volume": 0.016013},
    {"biscuit_type": "Cefa Cremo joy Strawberry", "weight": "40g", "length": 0.240, "width": 0.240, "height": 0.278, "quantity": 100, "volume": 0.016013},
    {"biscuit_type": "Cefa Cremo joy Lemon", "weight": "40g", "length": 0.240, "width": 0.240, "height": 0.278, "quantity": 100, "volume": 0.016013},
    {"biscuit_type": "Timbo", "weight": "60g", "length": 0.320, "width": 0.200, "height": 0.195, "quantity": 60, "volume": 0.012480},
    {"biscuit_type": "Crème", "weight": "65g", "length": 0.310, "width": 0.255, "height": 0.255, "quantity": 96, "volume": 0.020158},
    {"biscuit_type": "Marie Plus", "weight": "84g", "length": 0.350, "width": 0.300, "height": 0.290, "quantity": 60, "volume": 0.030450}  
  ];
  // Format options for react-select
  const formatOptions = (arr) => arr.map((value) => ({ label: value, value }));

const addCarton = () => {
  setSelectedCartons([
    ...selectedCartons,
    { id: selectedCartons.length + 1, biscuit_type: "", weight: "", quantity: "", cartonQuantity: 1 }
  ]);
};

const handleSelectionChange = (index, field, value) => {
  const updatedCartons = [...selectedCartons];
  updatedCartons[index][field] = value;

  if (field === "biscuit_type") {
    updatedCartons[index].weight = "";
    updatedCartons[index].quantity = "";
  } else if (field === "weight") {
    updatedCartons[index].quantity = "";
  }

  setSelectedCartons(updatedCartons);
};

const handleQuantityChange = (index, quantity) => {
  const updatedCartons = [...selectedCartons];
  if (!updatedCartons[index].hasOwnProperty("cartonQuantity")) {
    updatedCartons[index].cartonQuantity = 0; // Initialize if missing
  }
  updatedCartons[index].cartonQuantity = quantity;
  setSelectedCartons(updatedCartons);
};

const removeCarton = (index) => {
  setSelectedCartons(selectedCartons.filter((_, i) => i !== index));
};

const handleSubmit = () => {
  const validCartons = selectedCartons.filter(carton => carton.biscuit_type && carton.weight && carton.quantity);
  if (validCartons.length === 0) {
    alert("No valid cartons selected!");
    return;
  }
  const formattedCartons = validCartons.reduce((acc, carton) => {
    acc[carton.biscuit_type.value] = {
      biscuit_type: carton.biscuit_type.value,
      quantity: carton.cartonQuantity, // Ensure cartonQuantity is passed as quantity
      length: cartons.find(c => c.biscuit_type === carton.biscuit_type.value && c.weight === carton.weight.value && c.quantity === carton.quantity.value)?.length || 0,
      width: cartons.find(c => c.biscuit_type === carton.biscuit_type.value && c.weight === carton.weight.value && c.quantity === carton.quantity.value)?.width || 0,
      height: cartons.find(c => c.biscuit_type === carton.biscuit_type.value && c.weight === carton.weight.value && c.quantity === carton.quantity.value)?.height || 0,
      volume: cartons.find(c => c.biscuit_type === carton.biscuit_type.value && c.weight === carton.weight.value && c.quantity === carton.quantity.value)?.volume || 0,
    };
    return acc;
  }, {});
  onSelectionChange(formattedCartons);
};

return (
  <div className="p-6">
    <h2 className="font-semibold text-lg mb-6">Select Cartons:</h2>

    {selectedCartons.map((carton, index) => {
      const filteredWeights = carton.biscuit_type
        ? [...new Set(cartons.filter(c => c.biscuit_type === carton.biscuit_type.value).map(c => c.weight))]
        : [...new Set(cartons.map(c => c.weight))];

      const filteredQuantities = carton.biscuit_type && carton.weight
        ? [...new Set(cartons.filter(c => c.biscuit_type === carton.biscuit_type.value && c.weight === carton.weight.value).map(c => c.quantity))]
        : [...new Set(cartons.map(c => c.quantity))];

      return (
        <div key={carton.id} className="p-6 border rounded-lg shadow-md mb-10">
          <div className="grid grid-cols-3 gap-6">
            <div className="flex flex-col">
              <label className="mb-2 text-sm font-semibold">Carton Name</label>
              <Select
                options={formatOptions([...new Set(cartons.map((c) => c.biscuit_type))])}
                placeholder="Select Carton Name"
                isSearchable
                value={carton.biscuit_type}
                onChange={(option) => handleSelectionChange(index, "biscuit_type", option)}
                className="w-full py-3"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-sm font-semibold">Weight</label>
              <Select
                options={formatOptions(filteredWeights)}
                placeholder="Select Weight"
                isSearchable
                value={carton.weight}
                onChange={(option) => handleSelectionChange(index, "weight", option)}
                isDisabled={!carton.biscuit_type}
                className="w-full py-3"
              />
            </div>

            <div className="flex flex-col">
              <label className="mb-2 text-sm font-semibold">Biscuit Quantity</label>
              <Select
                options={formatOptions(filteredQuantities)}
                placeholder="Select Biscuit Quantity"
                isSearchable
                value={carton.quantity}
                onChange={(option) => handleSelectionChange(index, "quantity", option)}
                isDisabled={!carton.biscuit_type || !carton.weight}
                className="w-full py-3"
              />
            </div>
          </div>

          {carton.biscuit_type && carton.weight && carton.quantity && (
            <div className="mt-6 flex items-center space-x-4" style={{ marginBottom: "40px" }}>
              <label className="text-sm font-semibold">Carton Quantity:</label>
              <input
                type="number"
                min="1"
                value={carton.cartonQuantity}
                onChange={(e) => handleQuantityChange(index, parseInt(e.target.value) || 1)}
                className="border p-3 w-24 rounded-md"
              />
              <button
                onClick={() => removeCarton(index)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          )}
        </div>
      );
    })}

    <div className="mt-10 flex gap-6">
      <button
        onClick={addCarton}
        className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600"
      >
        Add Carton
      </button>

      {selectedCartons.length > 0 && (
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
        >
          Submit Selection
        </button>
      )}
    </div>
  </div>
);



};

export default CartonSelector;
