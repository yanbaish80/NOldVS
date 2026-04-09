# NOldVS (Node-Old-Version-System) 🚀
**Developer:** yanbaish_80  
**Status:** Alpha / In-Development 🛠️

NOldVS is a custom C++ module for Godot Engine designed to extend visual scripting capabilities. It provides a specialized environment for creating node-based logic, specifically tailored for game mechanic research, glitch exploitation, and engine-level automation.

## ✨ Key Features
- **Custom Node Editor**: A robust editor built on top of Godot's `GraphEdit`, optimized for rapid prototyping.
- **Mandatory Lifecycle Events**: Built-in support for essential system nodes: `On_Start`, `On_Stop`, and `On_Restart`.
- **Automated Build Pipeline**: Includes a dedicated C++ builder that auto-increments engine versions and archives builds.
- **Addon Management**: Integrated system to handle custom node packs via JSON configurations.

## 📁 Repository Structure
- `modules/noldvs/` — Core C++ module source code and headers.
- `tools/builder/` — The `noldvs_builder` source for automated compilation.
- `tools/addon_manager/` — CLI utility for managing `.novsn` node configurations.
- `configs/` — Default JSON templates for the "Starter Pack" nodes.

## 🚀 Installation & Build
To use this module, you need the Godot Engine source code (v4.3+ recommended).

1. Clone this repository.
2. Copy the `modules/noldvs` directory into your Godot `modules/` folder.
3. Run the build command using SCons:
   ```bash
   scons platform=windows arch=x86_64 target=editor custom_status="noldvs_dev" -j3
