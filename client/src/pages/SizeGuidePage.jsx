"use client"

import { useState } from "react"
import "./SizeGuidePage.css"

const SizeGuidePage = () => {
  const [activeTab, setActiveTab] = useState('women');

  return (
    <div className="size-guide-page">
      <div className="page-header">
        <h1 className="page-title">Size Guide</h1>
        <p className="page-subtitle">
          Find your perfect fit with our comprehensive sizing information
        </p>
      </div>

      <div className="size-guide-container">
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'women' ? 'active' : ''}`}
            onClick={() => setActiveTab('women')}
          >
            Women's Clothing
          </button>
          <button
            className={`tab ${activeTab === 'measurements' ? 'active' : ''}`}
            onClick={() => setActiveTab('measurements')}
          >
            How to Measure
          </button>
          <button
            className={`tab ${activeTab === 'conversion' ? 'active' : ''}`}
            onClick={() => setActiveTab('conversion')}
          >
            International Conversion
          </button>
        </div>

        <div className="tab-content">
          {activeTab === 'women' && (
            <div className="size-chart-container">
              <div className="size-chart-card">
                <h2 className="chart-title">Women's Clothing Size Chart</h2>
                <p className="chart-description">
                  All measurements are in inches. For the best fit, we recommend taking your measurements and comparing
                  them to the chart below.
                </p>

                <div className="table-container">
                  <table className="size-table">
                    <thead>
                      <tr>
                        <th>Size</th>
                        <th>US Size</th>
                        <th>Bust</th>
                        <th>Waist</th>
                        <th>Hips</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>XS</td>
                        <td>0-2</td>
                        <td>31-33</td>
                        <td>24-26</td>
                        <td>34-36</td>
                      </tr>
                      <tr>
                        <td>S</td>
                        <td>4-6</td>
                        <td>33-35</td>
                        <td>26-28</td>
                        <td>36-38</td>
                      </tr>
                      <tr>
                        <td>M</td>
                        <td>8-10</td>
                        <td>35-37</td>
                        <td>28-30</td>
                        <td>38-40</td>
                      </tr>
                      <tr>
                        <td>L</td>
                        <td>12-14</td>
                        <td>37-40</td>
                        <td>30-33</td>
                        <td>40-43</td>
                      </tr>
                      <tr>
                        <td>XL</td>
                        <td>16-18</td>
                        <td>40-43</td>
                        <td>33-36</td>
                        <td>43-46</td>
                      </tr>
                      <tr>
                        <td>XXL</td>
                        <td>20-22</td>
                        <td>43-46</td>
                        <td>36-40</td>
                        <td>46-49</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="subchart-title">Dress Size Chart</h3>
                <div className="table-container">
                  <table className="size-table">
                    <thead>
                      <tr>
                        <th>Size</th>
                        <th>US Size</th>
                        <th>Bust</th>
                        <th>Waist</th>
                        <th>Hips</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>XS</td>
                        <td>0-2</td>
                        <td>31-33</td>
                        <td>24-26</td>
                        <td>34-36</td>
                      </tr>
                      <tr>
                        <td>S</td>
                        <td>4-6</td>
                        <td>33-35</td>
                        <td>26-28</td>
                        <td>36-38</td>
                      </tr>
                      <tr>
                        <td>M</td>
                        <td>8-10</td>
                        <td>35-37</td>
                        <td>28-30</td>
                        <td>38-40</td>
                      </tr>
                      <tr>
                        <td>L</td>
                        <td>12-14</td>
                        <td>37-40</td>
                        <td>30-33</td>
                        <td>40-43</td>
                      </tr>
                      <tr>
                        <td>XL</td>
                        <td>16-18</td>
                        <td>40-43</td>
                        <td>33-36</td>
                        <td>43-46</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h3 className="subchart-title">Bottoms Size Chart</h3>
                <div className="table-container">
                  <table className="size-table">
                    <thead>
                      <tr>
                        <th>Size</th>
                        <th>US Size</th>
                        <th>Waist</th>
                        <th>Hips</th>
                        <th>Inseam (Regular)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>XS</td>
                        <td>0-2</td>
                        <td>24-26</td>
                        <td>34-36</td>
                        <td>30</td>
                      </tr>
                      <tr>
                        <td>S</td>
                        <td>4-6</td>
                        <td>26-28</td>
                        <td>36-38</td>
                        <td>30</td>
                      </tr>
                      <tr>
                        <td>M</td>
                        <td>8-10</td>
                        <td>28-30</td>
                        <td>38-40</td>
                        <td>30</td>
                      </tr>
                \
