# NOldVS (Node-Old-Version-System) 🚀
**Developer:** yanbaish_80
**Status:** Alpha / In-Development

THE PROJECT HAS BEEN ABANDONED FOR A YEAR AND WILL NOT BE UPDATED FOR A YEAR

NOldVS is a custom C++ module for Godot Engine designed to extend visual scripting capabilities. It provides a specialized environment for creating node-based logic, specifically tailored for game mechanic research, glitch exploitation, and engine-level automation.

## ✨ Key Features
- **Custom Node Editor**: A robust editor built on top of Godot's `GraphEdit`, optimized for rapid prototyping.
- **Mandatory Lifecycle Events**: Built-in support for essential system nodes: `On_Start`, `On_Stop`, and `On_Restart`.
- **Automated Build Pipeline**: Includes a dedicated C++ builder that auto-increments engine versions and archives builds.
- **Addon Management**: Integrated system to handle custom node packs via JSON configurations.

## 📁 Repository Structure
- `noldvs.rar` — Core C++ module source code and headers.
- `tools/addon_manager/` — CLI utility for managing `.novsn` node configurations (Not finished).

## 🚀 Installation & Build
To use this module, you need the Godot Engine source code (v4.3+ recommended).

1. Clone this repository.
2. Copy the `modules/noldvs` directory into your Godot `modules/` folder.
3. Run the build command using SCons:
   ```bash
   scons platform=windows arch=x86_64 target=editor custom_status="noldvs_dev" -j3
   
NOTE: The -j3 flag defines the number of CPU threads. If you have 6 cores or more, you can increase this (e.g., -j6) to make the build significantly faster.

Site for download : https://yanbaish80.github.io/NOldVS/#
